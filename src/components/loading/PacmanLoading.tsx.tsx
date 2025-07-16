import { PacmanLoader } from "react-spinners";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface PacmanLoadingProps {
  /**
   * The message to display above loader.
   * @default "Loading"
   */
  loadingMsg?: string;
  /**
   * Size of the pacman loader itself.
   * @default 45
   */
  size?: number;
  /**
   * The color of pacman loader.
   * @default "#faff20"
   */
  color?: string;
  /**
   * Classes in Tailwind
   */
  className?: ClassNameValue;
}

export default function PacmanLoading({
  loadingMsg = "Loading",
  size = 45,
  color = "#faff20",
  className,
}: PacmanLoadingProps) {
  const classes = twMerge(
    "inset-0 mx-auto flex w-fit flex-col items-center justify-center gap-5 bg-transparent",
    className,
  );

  return (
    <div className={classes}>
      <p className="animate-pulse text-2xl font-bold tracking-widest text-white">
        {loadingMsg}
      </p>
      <div style={{ width: `${size * 0.3}rem` }}>
        <PacmanLoader color={color} size={size} />
      </div>
    </div>
  );
}
