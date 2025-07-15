import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "~/lib/data";

export default async function MealsPage() {
  const meals = await getAllMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals made
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Made your day my making your first meal today.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
