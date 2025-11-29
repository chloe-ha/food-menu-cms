import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://offloadmedia.feverup.com/**"),
      new URL("https://www.healthyfoodcreation.fr/**"),
    ]
  }
};

export default nextConfig;
