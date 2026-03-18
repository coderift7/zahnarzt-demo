import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/zahnarzt-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
