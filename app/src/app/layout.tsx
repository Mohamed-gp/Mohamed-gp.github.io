import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/activeSectionContext";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Outerbah",
  description: "Mohamed Outerbah Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cairo.className}>
        <ActiveSectionContextProvider>
          {children}
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
