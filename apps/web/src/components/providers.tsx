'use client';

import PostHogProvider from './posthog-provider';
import { ThemeProvider } from './theme-provider';
import { Toaster } from './ui/sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableSystem
      >
        {children}
        <Toaster richColors />
      </ThemeProvider>
    </PostHogProvider>
  );
}
