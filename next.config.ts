import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/aiden-moffat-racing.vercel.app/:path*",
        destination: "https://www.aidenmoffat.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
