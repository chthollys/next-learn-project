"use server";

import { NewMealSchema, ErrorObject } from "./definitions";

export const shareMeal = async (formData: FormData) => {
  const mealData = Object.fromEntries(formData.entries());
  const validation = NewMealSchema.safeParse(mealData);
  if (!validation.success) {
    const error = new ErrorObject(
      "Error occurred in submitting new meal",
      406,
      validation.error.message,
    );
    throw error;
  }
};
