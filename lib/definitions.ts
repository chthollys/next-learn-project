import Link from "next/link";
import React from "react";

export type NextLinkProps = React.ComponentProps<typeof Link>;

export interface NavLinkProps extends NextLinkProps {
  children: React.ReactNode;
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
