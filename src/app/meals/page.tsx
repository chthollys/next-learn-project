import Link from "next/link";
import { Suspense } from "react";
import PacmanLoading from "@/components/loading/PacmanLoading.tsx";
import { getAllMeals } from "~/lib/data";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";

async function Meals() {
  const meals = await getAllMeals();
  if (meals.length < 1) {
    return (
      <p className="p-4 text-center text-3xl font-bold tracking-wider text-white">
        Create your first meal for this app.
      </p>
    );
  }
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense fallback={<PacmanLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
