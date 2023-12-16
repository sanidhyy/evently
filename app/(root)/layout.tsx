import type { PropsWithChildren } from "react";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
