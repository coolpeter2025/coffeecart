import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with hardcoded values
const supabaseUrl = 'https://stagfacvrlrtstshuwux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YWdmYWN2cmxydHN0c2h1d3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MTI0MTYsImV4cCI6MjA1NjM4ODQxNn0.kwkdfeOCQx5cnq98loS9pFPkdKHr2OKHdyy1p_PGFfc';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
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
