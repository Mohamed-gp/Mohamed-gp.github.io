/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  // Your existing Next.js configuration
};

export default withPWA({
  dest: "public",
  // Additional PWA options can be added here
})(nextConfig);