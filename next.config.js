/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
