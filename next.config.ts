import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.betaavm.com.tr",
      },
      {
        protocol: "http",
        hostname: "www.betaavm.com.tr",
      },
    ],
  },
};

export default nextConfig;
