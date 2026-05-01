import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "https://mom.93.fyi/privacy",
        permanent: false,
      },
      {
        source: "/sms-terms",
        destination: "https://mom.93.fyi/sms-terms",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
