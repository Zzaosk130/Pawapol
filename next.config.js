/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVE output: 'export' - Cloudflare Pages doesn't need it!
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig