import { PacmanLoader } from "react-spinners";

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
  classTW?: string;
  isTWReset?: boolean;
}

export default function PacmanLoading({
  loadingMsg = "Loading",
  size = 45,
  color = "#faff20",
  classTW,
  isTWReset = false,
}: PacmanLoadingProps) {
  let classes =
    "inset-0 mx-auto flex w-fit flex-col items-center justify-center gap-5 bg-transparent";
  if (classTW && !isTWReset) {
    classes += ` ${classTW}`;
  } else if (classTW && isTWReset) {
    classes = classTW;
  }

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
