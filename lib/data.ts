import { Meal } from "./definitions";
import { prisma } from "./prisma";

export const getAllMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await prisma.meal.findMany();
};

export const getMeal = async (slug: string): Promise<Meal | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await prisma.meal.findUnique({
    where: {
      slug: slug,
    },
  });
};
