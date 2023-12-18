"use server";

import { connectToDatabase } from "@/lib/database";
import Event from "@/lib/database/models/event.model";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";
import type { CreateEventParams } from "@/types";

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
