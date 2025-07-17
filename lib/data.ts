"use server";

import { NewMeal, Meal, ErrorObject } from "./definitions";
import { prisma } from "./prisma";
import xss from "xss";
import slugify from "slugify";

export const getAllMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    return prisma.meal.findMany();
  } catch (error) {
    console.error("Failed to fetch all meals", error);
    throw new ErrorObject("Failed to fetch all meals", 500);
  }
};

export const getMeal = async (slug: string): Promise<Meal | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    return prisma.meal.findUnique({
      where: {
        slug: slug,
      },
    });
  } catch (error) {
    console.error(`Failed to fetch meal with a slug of ${slug}: `, error);
    throw new ErrorObject("Failed to fetch meal", 500, `slug: ${slug}`);
  }
};

export const saveMeal = async ({
  creator,
  creator_email,
  title,
  summary,
  instructions,
  image,
}: NewMeal) => {
  const slug = slugify(title, { lower: true });
  const newData = {
    slug: xss(slug),
    creator: xss(creator),
    creator_email: xss(creator_email),
    title: xss(title),
    summary: xss(summary),
    image: xss(image),
    instructions: xss(instructions),
  };
  try {
    const response = await prisma.meal.create({ data: newData });
    return response;
  } catch (error) {
    console.error("Failed to create new meal.", error);
    throw new ErrorObject(
      "Failed to create new meal.",
      500,
      `Failed for meal title: ${newData.title}`,
    );
  }
};
