import Link from "next/link";
import React from "react";
import z from "zod";

export const MealFormSchema = z.object({
  title: z.string(),
  image: z.file().mime(["image/png", "image/jpeg"]),
  summary: z.string(),
  instructions: z.string(),
  name: z.string(),
  email: z.string(),
});

export const NewMealSchema = z.object({
  title: z.string(),
  image: z.string(),
  summary: z.string(),
  instructions: z.string(),
  creator: z.string(),
  creator_email: z.string(),
});

export const MealSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  image: z.string(),
  summary: z.string(),
  instructions: z.string(),
  creator: z.string(),
  creator_email: z.string(),
});

export type FormMeal = z.infer<typeof MealFormSchema>;
export type NewMeal = z.infer<typeof NewMealSchema>;
export type Meal = z.infer<typeof MealSchema>;

export type NextLinkProps = React.ComponentProps<typeof Link>;

export interface NavLinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export interface ErrorProps {
  error: ErrorObject & { digest?: string };
  reset: () => void;
}

export interface MealPageProps {
  params: {
    mealSlug: string;
  };
}

export interface ImagePickerProps {
  name?: string;
  label?: string;
}

export class ErrorObject extends Error {
  code: number;
  info?: {
    additionalInfo: string;
  };
  constructor(message: string, code: number, additionalInfo?: string) {
    super(message);
    this.name = "OptimizedError";
    this.code = code;
    if (additionalInfo) {
      this.info = { additionalInfo };
    }
  }
}

export interface StreamImageConfigObj {
  name?: string;
  location: string;
}
