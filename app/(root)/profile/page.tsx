import { auth } from "@clerk/nextjs";
import Link from "next/link";

import { Collection } from "@/components/shared/collection";
import { buttonVariants } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { cn } from "@/lib/utils";
import type { IOrder } from "@/lib/database/models/order.model";
import type { SearchParamProps } from "@/types";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

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
          page={ordersPage}
          urlParamName="ordersPage"
          total={orders?.totalPages}
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
          limit={3}
          page={eventsPage}
          urlParamName="ordersPage"
          total={organizedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default Profile;
