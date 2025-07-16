import PacmanLoading from "@/components/loading/PacmanLoading.tsx";

export default function MealLoadingPage() {
  return (
    <main>
      <PacmanLoading loadingMsg="Loading Meal" classTW="fixed m-auto" />
    </main>
  );
}
