# Delightful Bean Coffee Cart Website

A Next.js website for Delightful Bean Coffee Cart, a premium coffee cart rental service in Tampa Bay, Florida. The website showcases services for birthdays, weddings, private parties, and corporate events.

## Features

- Responsive design with TailwindCSS
- Contact form with Supabase backend
- Dynamic pages for different services
- Image gallery
- Menu display

## Tech Stack

- **Frontend**: Next.js 14, React 18, TailwindCSS
- **Backend**: Supabase
- **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Integration

This project uses Supabase for the backend database. The contact form submissions are stored in a `contact_submissions` table.

### Setting Up Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL script in `supabase/contact_submissions_table.sql` to create the necessary table
3. Update the Supabase URL and anon key in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the Supabase environment variables in the Vercel project settings
4. Deploy

## GitHub Repository

The source code is available at [https://github.com/coolpeter2025/coffeecart](https://github.com/coolpeter2025/coffeecart)
