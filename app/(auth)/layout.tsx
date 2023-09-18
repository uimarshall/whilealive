import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';

// Original source: https://github.com/vercel/next.js/blob/canary/examples/with-typescript-eslint-jest/app/auth/layout.tsx
export const metadata = {
  title: 'Whilealive',
  description:
    'A Whilealive Application that helps you keep your loved ones alive and sense of belongings.',
};

const InterFont = Inter({ subsets: ['latin'] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={InterFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
