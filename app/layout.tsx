import { ClerkProvider } from "@clerk/nextjs";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = siteConfig;

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
