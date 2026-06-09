'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

// posthog is initialized in instrumentation-client.ts; here we just hand the
// already-initialized client to React so components can use the usePostHog
// hook and feature-flag hooks.
export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
