import { createClient } from '@supabase/supabase-js';

// For client-side usage (public anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Only log warning in development, not during build
if (process.env.NODE_ENV === 'development' && (!supabaseUrl || !supabaseAnonKey)) {
  console.warn('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

// Create client with placeholder values if real ones aren't available
// This allows the build to complete, though the client won't work properly
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add a helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};
