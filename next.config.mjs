/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/beta",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
