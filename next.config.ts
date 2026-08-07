import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required in Next.js 16 — restrict to specific quality values
    qualities: [50, 75, 90],
    // Allow optimising images from the local public/ directory
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
