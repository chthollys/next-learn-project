import PacmanLoading from "@/components/loading/PacmanLoading.tsx";

export default function MealLoadingPage() {
  return (
    <main>
      <PacmanLoading loadingMsg="Loading Meal" className="fixed m-auto" />
    </main>
  );
}
