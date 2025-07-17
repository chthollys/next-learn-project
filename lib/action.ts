"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./data";
import { MealFormSchema, NewMeal, ShareMealFormState } from "./definitions";
import { streamImage } from "./server-utils";
import { z } from "zod";
import { redirect } from "next/navigation";

export const shareMeal = async (
  prevState: ShareMealFormState,
  formData: FormData,
): Promise<ShareMealFormState> => {
  const mealObj = Object.fromEntries(formData.entries());
  const {
    success,
    data,
    error: validationErr,
  } = MealFormSchema.safeParse(mealObj);

  // Validation with zod schema
  if (!success) {
    const errors = z.flattenError(validationErr);
    console.log("Error produced: ", errors);
    return { errors, messages: "Validation failed." };
  }

  const { imgPath } = await streamImage(data.image, {
    location: "/images",
  });
  const newMealData: NewMeal = {
    title: data.title,
    summary: data.summary,
    creator: data.name,
    creator_email: data.email,
    instructions: data.instructions,
    image: imgPath,
  };

  try {
    const createdMeal = await saveMeal(newMealData);
    console.log("New meal created: ", createdMeal);
  } catch (error) {
    console.error("Error occurred in shareMeal action.ts.", error);
    return {
      messages: "Error occurred in shareMeal action.ts.",
    };
  }

  revalidatePath("/meals");
  redirect("/meals");
};
