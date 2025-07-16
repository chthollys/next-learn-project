import { notFound } from "next/navigation";
import Image from "next/image";

import { getMeal } from "~/lib/data";
import { MealPageProps } from "~/lib/definitions";
import { convertLineBreakToHtml, sanitizeHtml } from "~/lib/utils";
import classes from "./page.module.css";

export default async function MealPage({ params }: MealPageProps) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);
  if (!meal) {
    notFound();
  }

  const sanitizedInstructions = sanitizeHtml(
    convertLineBreakToHtml(meal.instructions),
  );

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={meal.image}
            alt={`${meal.title}'s Image` || "Meal's Image"}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: `${sanitizedInstructions}` }}
        ></p>
      </main>
    </>
  );
}
