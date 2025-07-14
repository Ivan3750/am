/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['am.net.ua', 'img.youtube.com', 'cdn.sanity.io'],
  },
  experimental: {
    turbo: false,
  },

};

export default nextConfig;
