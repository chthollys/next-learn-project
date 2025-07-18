"use server";

import { revalidatePath } from "next/cache";
import { saveMeal } from "./data";
import {
  FormMeal,
  MealFormSchema,
  NewMeal,
  ShareMealFormState,
} from "./definitions";
import { uploadImageToS3 } from "./server-utils";
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
    return {
      errors,
      message: "Input contain invalid value, please check your input again.",
      data: mealObj as FormMeal,
    };
  }

  const {
    success: uploadSuccess,
    imgUrl,
    error,
  } = await uploadImageToS3(data.image);
  if ((!uploadSuccess || !imgUrl) && error) {
    return {
      message: error,
      data: mealObj as FormMeal,
      errors: null,
    };
  }
  const newMealData: NewMeal = {
    title: data.title,
    summary: data.summary,
    creator: data.name,
    creator_email: data.email,
    instructions: data.instructions,
    image: imgUrl!,
  };

  try {
    const createdMeal = await saveMeal(newMealData);
    console.log("New meal created: ", createdMeal);
  } catch (error) {
    let errorMsg = "Failed to create new meal.";
    if (error instanceof Error) {
      errorMsg = error.message;
    }
    console.error("Error occurred in shareMeal action.ts: ", errorMsg);
    return {
      message: errorMsg,
      errors: null,
      data: null,
    };
  }

  revalidatePath("/meals");
  redirect("/meals");
};
