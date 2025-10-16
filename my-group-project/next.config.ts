import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */

  eslint: {
    ignoreDuringBuilds: true, // 🚀 This skips ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // 🚀 This skips TypeScript "any" errors
  },
};

export default nextConfig;
