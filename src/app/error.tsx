"use client";

import Image from "next/image";
import errorImg from "~/assets/icons/ghostError.png";

import { ErrorProps } from "~/lib/definitions";

export default function ErrorPage({ error }: ErrorProps) {
  const dimension = 200;

  return (
    <main className="mt-[70px] flex flex-col items-center justify-center gap-[30px]">
      <div className="w-fit">
        <Image
          src={errorImg.src}
          alt="error icon"
          width={dimension}
          height={dimension}
        />
      </div>
      <p className="text-center text-2xl font-bold tracking-widest text-yellow-500">
        Error Message: {error.message}
        {error.info?.additionalInfo && <p>{error.info.additionalInfo}</p>}
      </p>
    </main>
  );
}
