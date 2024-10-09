/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

console.log(withPWA);
const pwaConfig = withPWA({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
});

const nextConfig = {};
export default pwaConfig(nextConfig);
