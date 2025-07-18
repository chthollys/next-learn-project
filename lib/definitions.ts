import Link from "next/link";
import React, { HTMLInputTypeAttribute } from "react";
import z from "zod";
import { $ZodErrorTree, $ZodFlattenedError } from "zod/v4/core";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  // "image/webp",
];

export const MealFormSchema = z.object({
  title: z.string().min(6, { error: "Title must have a length of 6 or more" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { error: "File's too short!" })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      error: "Only .png, .jpeg, and .jpg are supported",
    }),
  summary: z.string().trim().nonempty({ error: "Summary is required." }),
  instructions: z
    .string()
    .trim()
    .nonempty({ error: "Instructions is required." }),
  name: z.string().min(3, { error: "Name must have a length of 3 or more." }),
  email: z.email({ error: "Not a valid email address." }),
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

export type FormMealErrorObjTree = $ZodErrorTree<FormMeal>;
export type FormMealErrorObj = $ZodFlattenedError<FormMeal>;

export class ErrorObject extends Error {
  code: number;
  info?: {
    message: string;
  };
  constructor(message: string, code: number) {
    super();
    this.name = "OptimizedError";
    this.code = code;
    this.info = { message };
  }
}
export interface StreamImageConfigObj {
  name?: string;
  location: string;
}
export interface NavLinkProps extends NextLinkProps {
  children: React.ReactNode;
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
export interface ErrorProps {
  error: ErrorObject & { digest?: string };
  reset: () => void;
}

export interface ErrorShareProps {
  error: FormMealErrorObj & { digest?: string };
  reset: () => void;
}

export interface InputProps {
  name: string;
  id?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string | undefined;
  textArea?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  errorMsg?: string | undefined;
  children?: React.ReactNode;
}
export interface FormButtonProps {
  pendingText?: string;
  label?: string;
}

export interface ShareMealFormState {
  message: string | null;
  errors: FormMealErrorObj | null;
  data: FormMeal | null;
}
