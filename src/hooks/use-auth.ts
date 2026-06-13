/**
 * Supabase Email Auth (Magic Link / OTP)
 */
import { useState, useEffect, useCallback } from "react";
import { supabase, getCurrentUser, signOut } from "../lib/supabase";
import type { AuthUser } from "../lib/supabase";

export type { AuthUser };

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Simple modal state
let _openLoginModal: (() => void) | null = null;
export function openLoginModal() { _openLoginModal?.(); }

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
    _openLoginModal?.();
  }, []);

  const logout = useCallback(async () => {
    await signOut();
    setUser(null);
  }, []);

  return { user, isLoading, isAuthenticated: !!user, login, logout };
}
