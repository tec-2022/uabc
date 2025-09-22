import { createClient, type SupabaseClient } from '@supabase/supabase-js';
export function getSupabase(): SupabaseClient | null {
  if (typeof window === 'undefined') return null;
  const url = (import.meta as any).env?.SUPABASE_URL || (window as any).__ENV?.SUPABASE_URL;
  const key = (import.meta as any).env?.SUPABASE_ANON_KEY || (window as any).__ENV?.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
