/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Project uses plain <img> tags with static /public assets.
    unoptimized: true,
  },
};

export default nextConfig;
