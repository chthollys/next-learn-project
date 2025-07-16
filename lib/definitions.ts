import Link from "next/link";
import React from "react";

export type NextLinkProps = React.ComponentProps<typeof Link>;

export interface NavLinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export type Meal = {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export interface MealPageProps {
  params: {
    mealSlug: string;
  };
}

export interface ImagePickerProps {
  name?: string;
  label?: string;
}
