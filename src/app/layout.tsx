import type { Metadata } from "next";
import { metrophobic, orbitron } from "@/app/fonts/fonts";
import { ThemeProvider } from "@/lib/theme-provider";

import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
    <html lang="en" suppressHydrationWarning className={"!scroll-smooth"}>
      <body
        className={`${metrophobic.variable} ${orbitron.variable} antialiased`}
      >
        <ThemeProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
