import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";

const cairo = Cairo({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dar"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
