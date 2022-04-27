/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withImages = require("next-images");

module.exports = nextConfig;
module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ["static.tcimg.net"],
  },
  webpack(config, options) {
    return config;
  },
});
