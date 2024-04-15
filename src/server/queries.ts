"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function geyMyImages() {
  const user = auth();
  if (!user.userId) {
    throw new Error("User not found");
  }

  const images = await db.query.images.findMany({
    where: (data, { eq }) => eq(data.userId, user.userId),
    orderBy: (data, { desc }) => desc(data.id),
  });
  return images;
}
