import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/how-it-works",
          destination: "/stitch-site/index.html",
        },
        {
          source: "/pricing",
          destination: "/stitch-site/pricing/index.html",
        },
        {
          source: "/proof",
          destination: "/stitch-site/proof/index.html",
        },
        {
          source: "/faq",
          destination: "/stitch-site/faq/index.html",
        },
        {
          source: "/book-demo",
          destination: "/stitch-site/book-demo/index.html",
        },
      ],
    };
  },
};

export default nextConfig;
