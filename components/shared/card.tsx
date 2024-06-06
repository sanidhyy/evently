import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";

import { DeleteConfirmation } from "./delete-confirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

export const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{
          backgroundImage: `url(${event.imageUrl})`,
        }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-gray-500"
        tabIndex={-1}
      />

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[238px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-gray-500/10 px-4 py-1 text-gray-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}

        <p className="p-medium-16 p-medium-18 text-gray-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <Link
          href={`/events/${event._id}`}
          className="p-medium016 md:p-medium-20 line-clamp-2 flex-1 text-black"
        >
          {event.title}
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-gray-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}

          {hidePrice && (
            <Link
              href={event.url || ""}
              target="_blank"
              rel="noreferrer noopener"
              className="flex gap-2"
            >
              <p className="text-primary-500">Join Event</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
