import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Reverse-proxy PostHog through this app so analytics survives ad blockers.
  // Requests to /ingest/* are rewritten to PostHog's EU cloud.
  rewrites() {
    return Promise.resolve([
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ]);
  },
  // Required so PostHog API requests aren't redirected by trailing-slash handling.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
