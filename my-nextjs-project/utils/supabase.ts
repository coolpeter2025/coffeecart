import { createClient } from '@supabase/supabase-js';

// Use environment variables with fallback to hardcoded values for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTI0MTYsImV4cCI6MjA1NjM4ODQxNn0.kwkdfeOCQx5cnq98loS9pFPkdKHr2OKHdyy1p_PGFfc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
