-- =============================================
-- English Journey - Supabase Setup SQL
-- Run this in: Supabase Dashboard → SQL Editor
-- =============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── Users progress table ──
create table if not exists public.user_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  lesson_id integer not null,
  score integer default 0,
  stars integer default 0,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- ── User stats table ──
create table if not exists public.user_stats (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  total_xp integer default 0,
  streak integer default 0,
  last_activity_date date,
  exercises_completed integer default 0,
  weekly_xp integer[] default array[0,0,0,0,0,0,0],
  updated_at timestamptz default now()
);

-- ── Level tests table ──
create table if not exists public.level_tests (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  level text not null,
  score integer not null,
  passed boolean default false,
  completed_at timestamptz default now(),
  unique(user_id, level)
);

-- ── Row Level Security ──
alter table public.user_progress enable row level security;
alter table public.user_stats enable row level security;
alter table public.level_tests enable row level security;

-- user_progress policies
create policy "Users can view own progress" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.user_progress
  for update using (auth.uid() = user_id);

-- user_stats policies
create policy "Users can view own stats" on public.user_stats
  for select using (auth.uid() = user_id);
create policy "Users can insert own stats" on public.user_stats
  for insert with check (auth.uid() = user_id);
create policy "Users can update own stats" on public.user_stats
  for update using (auth.uid() = user_id);

-- level_tests policies
create policy "Users can view own tests" on public.level_tests
  for select using (auth.uid() = user_id);
create policy "Users can insert own tests" on public.level_tests
  for insert with check (auth.uid() = user_id);
create policy "Users can update own tests" on public.level_tests
  for update using (auth.uid() = user_id);

-- ── Add pro field to user_stats ──
alter table public.user_stats add column if not exists is_pro boolean default false;

-- ── Online tracking table ──
create table if not exists public.user_sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  last_seen timestamptz default now(),
  unique(user_id)
);
alter table public.user_sessions enable row level security;
create policy "Users can manage own session" on public.user_sessions
  for all using (auth.uid() = user_id);
create policy "Admins can view all sessions" on public.user_sessions
  for select using (true);

-- ── Add email column to user_stats ──
alter table public.user_stats add column if not exists email text;

-- Fix user_sessions policies
drop policy if exists "Users can manage own session" on public.user_sessions;
create policy "Users can insert own session" on public.user_sessions
  for insert with check (auth.uid() = user_id);
create policy "Users can update own session" on public.user_sessions
  for update using (auth.uid() = user_id);
create policy "Users can view own session" on public.user_sessions
  for select using (auth.uid() = user_id);

-- ── Add Pro expiry to user_stats ──
alter table public.user_stats add column if not exists pro_expires_at timestamptz;

-- ── Admin function to grant/revoke Pro (bypasses RLS) ──
create or replace function admin_set_pro(
  target_user_id uuid,
  new_is_pro boolean,
  new_expires_at timestamptz
)
returns void
security definer
language plpgsql
as $$
begin
  insert into public.user_stats (
    user_id, is_pro, pro_expires_at,
    total_xp, streak, exercises_completed,
    weekly_xp, last_activity_date
  ) values (
    target_user_id, new_is_pro, new_expires_at,
    0, 0, 0, '{0,0,0,0,0,0,0}',
    current_date
  )
  on conflict (user_id) do update
    set is_pro = new_is_pro,
        pro_expires_at = new_expires_at;
end;
$$;

-- ── Fix sessions - allow admin to read all sessions ──
drop policy if exists "Users can view own session" on public.user_sessions;
drop policy if exists "Admins can view all sessions" on public.user_sessions;
create policy "Anyone can read sessions" on public.user_sessions
  for select using (true);

-- ── Disable email confirmation requirement (allow immediate login after signup) ──
-- Run this in Supabase Dashboard > Authentication > Settings
-- Set "Enable email confirmations" to OFF

-- ── Admin function to delete user completely ──
create or replace function admin_delete_user(target_user_id uuid)
returns void
security definer
set search_path = public
language plpgsql
as $$
begin
  -- Delete all user data
  delete from public.user_progress where user_id = target_user_id;
  delete from public.user_stats where user_id = target_user_id;
  delete from public.user_sessions where user_id = target_user_id;
  delete from public.level_tests where user_id = target_user_id;
  -- Delete from auth
  delete from auth.users where id = target_user_id;
end;
$$;

-- Add gender column to user_stats
alter table public.user_stats add column if not exists gender text default 'male';

-- Chat history table (lightweight - stores last 3 conversations per user)
create table if not exists public.chat_history (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  teacher_id text not null,
  messages jsonb not null default '[]',
  updated_at timestamptz default now()
);

alter table public.chat_history enable row level security;
create policy "Users manage own chats" on public.chat_history for all using (auth.uid() = user_id);

-- ══════════════════════════════════════════
-- SECURITY HARDENING
-- ══════════════════════════════════════════

-- 1. Admin table (server-side check)
create table if not exists public.admins (
  user_id uuid references auth.users(id) on delete cascade primary key,
  created_at timestamptz default now()
);
alter table public.admins enable row level security;
-- Only admins can read admin list (checked via function)
create policy "Admins only" on public.admins for select using (auth.uid() = user_id);

-- Insert your admin user (run after creation)
-- insert into public.admins (user_id) select id from auth.users where email = 'azoozalgamde2@gmail.com';

-- 2. Secure is_admin function
create or replace function public.is_admin()
returns boolean
security definer
set search_path = public
language plpgsql
as $$
begin
  return exists (select 1 from public.admins where user_id = auth.uid());
end;
$$;

-- 3. Secure admin_set_pro — only real admins
create or replace function admin_set_pro(target_user_id uuid, new_is_pro boolean, new_expires_at timestamptz)
returns void
security definer
set search_path = public
language plpgsql
as $$
begin
  if not public.is_admin() then
    raise exception 'Unauthorized: admin access required';
  end if;
  insert into public.user_stats (user_id, is_pro, pro_expires_at)
  values (target_user_id, new_is_pro, new_expires_at)
  on conflict (user_id) do update
  set is_pro = excluded.is_pro, pro_expires_at = excluded.pro_expires_at;
end;
$$;

-- 4. Secure admin_delete_user — only real admins
create or replace function admin_delete_user(target_user_id uuid)
returns void
security definer
set search_path = public
language plpgsql
as $$
begin
  if not public.is_admin() then
    raise exception 'Unauthorized: admin access required';
  end if;
  delete from public.user_progress where user_id = target_user_id;
  delete from public.user_stats where user_id = target_user_id;
  delete from public.user_sessions where user_id = target_user_id;
  delete from public.level_tests where user_id = target_user_id;
  delete from public.chat_history where user_id = target_user_id;
  delete from auth.users where id = target_user_id;
end;
$$;

-- 5. Secure get_all_users — only real admins
create or replace function get_all_users()
returns table (id uuid, email text, created_at timestamptz)
security definer
set search_path = public
language plpgsql
as $$
begin
  if not public.is_admin() then
    raise exception 'Unauthorized: admin access required';
  end if;
  return query select u.id, u.email::text, u.created_at from auth.users u order by u.created_at desc;
end;
$$;

-- 6. RLS: prevent direct table manipulation from non-admins
-- user_stats: users can only update their own non-sensitive fields
drop policy if exists "Admin full access to user_stats" on public.user_stats;
create policy "Users read own stats" on public.user_stats for select using (auth.uid() = user_id);
create policy "Users update own stats" on public.user_stats for update using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
create policy "Users insert own stats" on public.user_stats for insert with check (auth.uid() = user_id);
create policy "Admin full access" on public.user_stats for all using (public.is_admin());

-- 7. chat_history: users can only access their own
drop policy if exists "Users manage own chats" on public.chat_history;
create policy "Users own chats" on public.chat_history for all using (auth.uid() = user_id);
