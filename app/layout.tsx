import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event management.",
};

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
