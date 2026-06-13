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
