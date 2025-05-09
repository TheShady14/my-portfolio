import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Lombaard | Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload background SVGs */}
        <link
          rel="preload"
          href="/images/background-light.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/images/background-dark.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className="transition-theme" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
