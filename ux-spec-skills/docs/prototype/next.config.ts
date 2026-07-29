import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/skills/dataviz-critique",
        destination: "/skills/dataviz-crit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
