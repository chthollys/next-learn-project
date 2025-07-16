import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/image/ImageSlideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Enjoy Foods, Enjoy Life</h1>
          </div>
          <div className={classes.cta}>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">See Community</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h1 className={classes["highlight-h1"]}>How it works</h1>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h1 className={classes["highlight-h1"]}>Why NextLevel Food?</h1>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
