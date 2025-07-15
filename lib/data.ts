import { Meal } from "./definitions";
import { prisma } from "./prisma";

export const getAllMeals = async (): Promise<Meal[]> => {
  return await prisma.meal.findMany();
};
