import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";
import { NavItems } from "./nav-items";

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

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-64 items-center justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "rounded-full",
              )}
            >
              Login
            </Link>
          </SignedOut>

          <Link
            href="https://github.com/sanidhyy/evently"
            target="_blank"
            rel="noreferrer noopener"
            title="Source Code"
          >
            <Image
              src="/assets/images/github.svg"
              alt="github"
              height={25}
              width={25}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
