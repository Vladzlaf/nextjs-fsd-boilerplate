import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize bundle size by disabling TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint during production build
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizePackageImports: ["@tanstack/react-query", "react-toastify"],
  },

  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
