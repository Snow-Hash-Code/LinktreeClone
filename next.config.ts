import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qjx0octtjz.ufs.sh",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
