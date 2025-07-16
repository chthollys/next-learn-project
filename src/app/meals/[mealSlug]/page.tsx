import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "~/lib/data";

interface MealPageProps {
  params: {
    mealSlug: string;
  };
}

export default async function MealPage({ params }: MealPageProps) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);
  if (!meal) {
    return <p>Meal not found</p>;
  }

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
        <h1 className="">{"TITLE"}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: `${meal?.instructions}` }}
        ></p>
      </main>
    </>
  );
}
