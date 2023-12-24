import { auth } from "@clerk/nextjs";
import Link from "next/link";

import { Collection } from "@/components/shared/collection";
import { buttonVariants } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { cn } from "@/lib/utils";
import { IOrder } from "@/lib/database/models/order.model";

const Profile = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const orders = await getOrdersByUser({ userId, page: 1 });
  const organizedEvents = await getEventsByUser({ userId, page: 1 });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Link
            href="/#events"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "button hidden sm:flex"
            )}
          >
            Explore more events
          </Link>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No events tickets purchased yet."
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          total={2}
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Link
            href="/events/create"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "button hidden sm:flex"
            )}
          >
            Create new event
          </Link>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet."
          emptyStateSubtext="Go create some now."
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="ordersPage"
          total={2}
        />
      </section>
    </>
  );
};

export default Profile;
