import { useState, useEffect, useCallback } from "react";
import { supabase, getCurrentUser, signOut } from "../lib/supabase";
import { triggerLoginModal } from "../lib/modal-state";
import type { AuthUser } from "../lib/supabase";

export type { AuthUser };

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    const u = await getCurrentUser();
    setUser(u);
    setIsLoading(false);
    // Update online session
    if (u) {
      const { supabase } = await import("../lib/supabase");
      await supabase.from("user_sessions").upsert({
        user_id: u.id,
        last_seen: new Date().toISOString(),
      }, { onConflict: "user_id" });
    }
  }, []);

  // Keep session alive every 2 minutes
  useEffect(() => {
    const interval = setInterval(async () => {
      const u = await getCurrentUser();
      if (u) {
        const { supabase } = await import("../lib/supabase");
        await supabase.from("user_sessions").upsert({
          user_id: u.id,
          last_seen: new Date().toISOString(),
        }, { onConflict: "user_id" });
      }
    }, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });
    return () => subscription.unsubscribe();
  }, [fetchUser]);

  const login = useCallback(() => {
    triggerLoginModal();
  }, []);

  const logout = useCallback(async () => {
    await signOut();
    setUser(null);
  }, []);

  return { user, isLoading, isAuthenticated: !!user, login, logout };
}
