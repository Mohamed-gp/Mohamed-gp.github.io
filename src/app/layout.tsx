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
import { Analytics } from "@vercel/analytics/react";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap", // Prevents layout shift
  preload: true,
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/scripts/theme-switcher.js" as="script" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/scripts/theme-switcher.js" defer></script>
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
