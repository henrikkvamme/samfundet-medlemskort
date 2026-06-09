import posthog from 'posthog-js';

// Runs on the client before the app hydrates (Next.js 15.3+).
// `defaults` opts into PostHog's current recommended behaviour, including
// SPA pageview + pageleave capture, so no manual <PostHogPageView> is needed.
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
  api_host: '/ingest',
  ui_host: 'https://eu.posthog.com',
  defaults: '2026-01-30',
  capture_exceptions: true,
});
