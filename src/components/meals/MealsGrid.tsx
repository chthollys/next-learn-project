import { Meal } from "~/lib/definitions";
import classes from "./MealsGrid.module.css";
import MealItem from "./MealItem";

interface MealsGridProps {
  meals: Meal[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
