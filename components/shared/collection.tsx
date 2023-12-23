import { IEvent } from "@/lib/database/models/event.model";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  total?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

export const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  total,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return <div className="">Collection</div>;
};
