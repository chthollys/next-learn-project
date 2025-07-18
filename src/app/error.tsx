"use client";

import Image from "next/image";
import errorImg from "~/assets/icons/ghostError.png";

import { ErrorProps } from "~/lib/definitions";

export default function ErrorPage({ error }: ErrorProps) {
  const DIMENSION = 200;
  console.log("Error message received in client: ", error);

  return (
    <main className="mt-[70px] flex flex-col items-center justify-center gap-[30px]">
      <div className="w-fit">
        <Image
          src={errorImg.src}
          alt="error icon"
          width={DIMENSION}
          height={DIMENSION}
        />
      </div>
      <p className="text-center text-2xl font-bold tracking-widest text-yellow-500">
        Error Message: {error.message}
      </p>
    </main>
  );
}
