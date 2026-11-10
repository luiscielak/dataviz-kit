import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Served at thehoomanloop.com/dataviz via Netlify proxy (same pattern as /spell).
  basePath: "/dataviz",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        pathname: "/b/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dataviz",
        permanent: false,
        basePath: false,
      },
      {
        source: "/skills/dataviz-critique",
        destination: "/skills/dataviz-crit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
