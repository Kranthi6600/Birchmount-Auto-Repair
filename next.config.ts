import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wehoware-saas-storage.s3.ca-central-1.amazonaws.com',
        pathname: '/services/**',
      },
      {
        protocol: 'https',
        hostname: 'wehoware-saas-storage.s3.ca-central-1.amazonaws.com',
        pathname: '/blogs/**',
      },
    ],
  },
};

export default nextConfig;
