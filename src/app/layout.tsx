import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const storageKey = 'theme-preference';
    let theme;
    try {
      theme = localStorage.getItem(storageKey);
    } catch (e) {
      // If localStorage is not available, default to system
      theme = 'system';
    }
    
    // If no theme is found, default to system
    theme = theme || 'system';
    
    function setThemeClass() {
      const isDark = theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    // Set initial theme
    setThemeClass();
    
    // Watch for system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (theme === 'system') {
      // Add event listener with modern API
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', setThemeClass);
      } else if (mediaQuery.addListener) {
        // For older browsers
        mediaQuery.addListener(setThemeClass);
      }
    }
  } catch (e) {
    console.error('Theme setup failed:', e);
  }
})();
`,
          }}
        />
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
