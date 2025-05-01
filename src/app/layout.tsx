import "./globals.css";


export const metadata: Metadata = {
  title: "Mohamed Outerbah",
  description: "Mohamed Outerbah Portfolio",
  authors: [
    {
      name: "Mohamed Outerbah",
      url: "https://www.linkedin.com/in/mohamed-outerbah-b97469257",
    },
  ],
  creator: "Mohamed Outerbah",
  publisher: "Mohamed Outerbah",
  alternates: {
    canonical: "https://mohamedouterbah.tech", // Replace with your actual URL
  },
  keywords: [
    "web developer",
    "full stack",
    "developer",
    "portfolio",
    "react",
    "next.js",
    "javascript",
    "typescript",
    "css",
    "html",
    "tailwind",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    github: "https://github.com/Mohamed-gp", // Add your GitHub profile here
  },
};

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "@/components/theme-provider/ThemeProviderWrapper";
import dynamic from "next/dynamic";

// Load Analytics only in production and client-side
const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false }
);

const cairo = Cairo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/scripts/theme-switcher.js" defer></script>
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
