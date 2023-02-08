import { useState } from "react";
import { useDrop } from "react-dnd";
import { COLORS } from "../static/colors.const";
import { PegProps } from "./Peg";

type GuessProps = {
  active: boolean;
};

export default function Guess({ active }: GuessProps) {
  const [guessColorClass, setGuessColorClass] = useState("bg-slate-600");

  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: "color",
      canDrop: () => active,
      drop: (color: PegProps) => guessColor(color.colorName),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  function guessColor(colorName: string) {
    setGuessColorClass(COLORS[colorName]);
  }

  return (
    <span
      ref={dropRef}
      className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full ${
        isOver && canDrop ? "bg-red-100" : guessColorClass
      }`}
    ></span>
  );
}
