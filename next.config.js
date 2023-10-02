/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gamenhanvan.files.wordpress.com",
        // hostname: "re632.files.wordpress.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
