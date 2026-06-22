import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Naver smartstore / shopping image CDNs
      { protocol: "https", hostname: "shop-phinf.pstatic.net" },
      { protocol: "https", hostname: "phinf.pstatic.net" },
      { protocol: "https", hostname: "ssl.pstatic.net" },
    ],
  },
};

export default nextConfig;
