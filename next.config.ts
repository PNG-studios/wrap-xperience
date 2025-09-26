import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com", // sometimes reviews use this host too
      },
    ],
  },
};

export default nextConfig;
