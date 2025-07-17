"use server";

import { saveMeal } from "./data";
import { MealFormSchema, ErrorObject, NewMeal } from "./definitions";
import { streamImage } from "./server-utils";

export const shareMeal = async (formData: FormData) => {
  const mealObj = Object.fromEntries(formData.entries());
  const {
    success,
    data,
    error: validationErr,
  } = MealFormSchema.safeParse(mealObj);
  if (!success) {
    const error = new ErrorObject(
      "Error occurred in submitting new meal",
      406,
      validationErr.message,
    );
    console.log(error.info?.additionalInfo); // development only
    throw error;
  }
  try {
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
    const createdMeal = await saveMeal(newMealData);
    console.log("New meal created: ", createdMeal);
  } catch (error) {
    console.error("Error occurred in shareMeal action.ts.", error);
  }
};
