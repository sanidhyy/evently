"use server";

import { connectToDatabase } from "@/lib/database";
import Category from "@/lib/database/models/category.model";
import Event from "@/lib/database/models/event.model";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";
import type { CreateEventParams } from "@/types";

const populateEvent = async (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({
      path: "category",
      model: Category,
      select: "_id name",
    });
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) throw new Error("Organizer not found.");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error: unknown) {
    handleError(error);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) throw new Error("Event not found.");

    return JSON.parse(JSON.stringify(event));
  } catch (error: unknown) {
    handleError(error);
  }
};
