import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with server-side environment variables
// Use hardcoded URL as provided
const supabaseUrl = 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    // Check if Supabase is properly configured
    if (!supabaseKey) {
      console.warn('Supabase not configured properly. Contact form will not work.');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Contact form is not configured. Please set up Supabase environment variables.' 
        },
        { status: 503 }
      );
    }

    // Parse the request body
    const formData = await request.json();
    
    // Insert the form data into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          guest_count: formData.guestCount,
          message: formData.message,
          submitted_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Error submitting form:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to submit form' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
