import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center bg-background">
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
          <Toaster />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
