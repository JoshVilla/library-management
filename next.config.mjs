/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        stream: false,
      };
    }
    return config;
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
