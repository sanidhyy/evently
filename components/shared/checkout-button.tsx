"use client";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { IEvent } from "@/lib/database/models/event.model";
import { cn } from "@/lib/utils";

import { Checkout } from "./checkout";

export const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {/* Cannot buy past event */}
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "button rounded-full",
              )}
            >
              Get Tickets
            </Link>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};
