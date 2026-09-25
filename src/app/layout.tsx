import type { Metadata } from "next";
import { geistSans, geistMono } from "../../public/images/fonts/fonts";
import ThemeProvider from "@/components/layout/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "DevNest",
  description: "Connect. Build. Learn. Grow Together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}