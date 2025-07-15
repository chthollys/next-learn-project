import Image from "next/image";
import NavLink from "../NavLink";

import logoImg from "~/public/images/logo.png";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <NavLink href="/" className={classes.logo}>
        <Image
          src={logoImg.src}
          width={logoImg.width}
          height={logoImg.height}
          priority
          alt="A plate with food on it"
        />
        Foodies
      </NavLink>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
