interface MealPageProps {
  params: {
    slug: string;
  };
}

export default async function MealPage({ params }: MealPageProps) {
  const { slug } = await params;
  return (
    <main>
      <h1 className="">Meals Page</h1>
      <p>Id: {slug}</p>
    </main>
  );
}
