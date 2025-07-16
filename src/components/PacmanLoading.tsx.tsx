import { PacmanLoader } from "react-spinners";

export default function PacmanLoading() {
  const loaderSize = 45;
  const containerSize = `w-${loaderSize * 1.2}`;
  console.log(containerSize);

  return (
    <div className="inset-0 mx-auto flex w-fit flex-col items-center justify-center gap-5 bg-transparent">
      <p className="animate-pulse text-2xl font-bold tracking-widest text-white">
        Loading
      </p>
      <div style={{ width: `${loaderSize * 0.3}rem` }}>
        <PacmanLoader color="#faff20" size={loaderSize} />
      </div>
    </div>
  );
}
