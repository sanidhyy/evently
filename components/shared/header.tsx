import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "rounded-full"
              )}
            >
              Login
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
