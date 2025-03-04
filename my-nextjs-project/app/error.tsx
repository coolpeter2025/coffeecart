"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-8">We apologize for the inconvenience.</p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/" 
          className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
