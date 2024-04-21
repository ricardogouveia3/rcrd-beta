/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/rcrd-beta",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;
