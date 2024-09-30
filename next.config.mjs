/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
