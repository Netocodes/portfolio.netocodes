import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'muhaiminshihab.github.io',
        port: '',
        pathname: '/assets/images/author_1.jpg',
      },
    ],
  },
};
export default nextConfig;
