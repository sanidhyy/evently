"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.route}
            className={cn(
              "flex-center p-medium-16 whitespace-nowrap",
              isActive && "text-primary-500",
            )}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
