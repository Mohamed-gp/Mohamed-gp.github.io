import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeProvider from "@/context/ThemeContext";
import ActiveModelProvider from "@/context/ActiveModelContext";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Outerbah",
  description: "Mohamed Outerbah Portfolio",
  authors: [
    {
      name: "Mohamed Outerbah",
      url: "https://www.linkedin.com/in/mohamed-outerbah-b97469257/",
    },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <body suppressHydrationWarning={true} className={cairo.className}>
        <ActiveSectionContextProvider>
          <ActiveModelProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ActiveModelProvider>
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
