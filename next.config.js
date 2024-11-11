// import { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
};

// export default nextConfig;
module.exports = nextConfig;