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
