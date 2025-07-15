import Link from "next/link";
import React from "react";

export type NextLinkProps = React.ComponentProps<typeof Link>;

export interface NavLinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export type Meal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};
