import type { PropsWithChildren } from "react";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
