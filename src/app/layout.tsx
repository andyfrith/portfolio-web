import type { Metadata } from "next";
import { metrophobic, orbitron } from "@/app/fonts/fonts";
import { ThemeProvider } from "@/lib/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Andy Frith - Portfolio",
  description: "This is the portfolio website for Andy Frith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${metrophobic.variable} ${orbitron.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
