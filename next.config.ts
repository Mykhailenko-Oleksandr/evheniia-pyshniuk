// import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// const nextConfig: NextConfig = {
//   // images: {
//   //   remotePatterns: [{ protocol: "https", hostname: "ac.goit.global" }],
//   // },
//   i18n: {
//     locales: ["uk", "en"],
//     defaultLocale: "uk",
//   },
// };

// export default nextConfig;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ac.goit.global" }],
  },
};

const withNextIntl = createNextIntlPlugin();
// const withMDX = createMDX();
export default withNextIntl(nextConfig);
