import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-white">Time to get started!</h1>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </main>
  );
}
