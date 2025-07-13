/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['am.net.ua', "img.youtube.com"],
  },
  experimental: {
    turbo: false,  // Вимикаємо turbopack
  },
};



export default nextConfig;
