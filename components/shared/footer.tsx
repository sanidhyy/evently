import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="flex items-center justify-center gap-x-1">
          <Copyright className="h-4 w-4" /> {new Date().getFullYear()} Evently.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
