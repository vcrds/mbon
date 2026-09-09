import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/schedule",
        destination: "/agenda",
        permanent: true,
      },
      {
        source: "/location",
        destination: "/localizacao",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
