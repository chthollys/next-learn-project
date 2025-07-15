"use client";

import { NavLinkProps } from "~/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

export default function NavLink({
  children,
  className,
  ...props
}: NavLinkProps) {
  const path = usePathname();
  const isActive = path.startsWith(props.href.toString());
  const combinedClassName = [
    classes.link,
    className,
    isActive ? classes.active : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}
