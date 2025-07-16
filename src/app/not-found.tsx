import Image from "next/image";
import notFoundImg1 from "~/assets/icons/ghostNotFound-1.png";
import notFoundImg2 from "~/assets/icons/ghostNotFound-2.png";

export default function NotFoundPage() {
  const dimension = 180;

  return (
    <main className="flex flex-col gap-12 text-center">
      <div className="mx-auto mt-[40px] flex items-end justify-center gap-15">
        <Image
          src={notFoundImg1.src}
          alt="Not Found Icon 1"
          width={dimension}
          height={dimension}
        />
        <Image
          src={notFoundImg2.src}
          alt="Not Found Icon 2"
          width={dimension}
          height={dimension}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-widest text-yellow-500">
          Ouchh.. Page Not Found
        </h1>
      </div>
    </main>
  );
}
