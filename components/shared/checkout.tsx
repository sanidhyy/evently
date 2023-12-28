import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { checkoutOrder } from "@/lib/actions/order.actions";
import type { IEvent } from "@/lib/database/models/event.model";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const Checkout = ({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onCheckout = async () => {
    setIsLoading(true);

    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price || "",
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button
        type="submit"
        role="link"
        size="lg"
        className="button sm:w-fit"
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        {isLoading
          ? "Redirecting..."
          : event.isFree
            ? "Get Ticket"
            : "Buy Ticket"}
      </Button>
    </form>
  );
};
