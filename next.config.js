/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.dummyjson.com",
      },
    ],
  },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
  },
};

module.exports = nextConfig;
