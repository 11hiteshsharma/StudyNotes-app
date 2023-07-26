/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "imgv2-1-f.scribdassets.com",
    ],
  },
};

module.exports = nextConfig;
