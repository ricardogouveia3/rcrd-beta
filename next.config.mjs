/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
