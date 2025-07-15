import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/meals/share">Share Now!</Link>
        </li>
        <li>
          <Link href="/meals/meal-1">Meal 1</Link>
        </li>
        <li>
          <Link href="/meals/meal-2">Meal 2</Link>
        </li>
      </ul>
    </main>
  );
}
