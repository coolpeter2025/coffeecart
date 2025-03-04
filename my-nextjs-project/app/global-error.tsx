"use client";

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
          <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
          <p className="mb-8">We apologize for the inconvenience. Our team has been notified.</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
