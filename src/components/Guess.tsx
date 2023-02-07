import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { GameContext, GameContextType } from "../contexts/GameContext";
import { COLORS } from "../static/colors.const";
import { ColorProps } from "./Color";

type GuessProps = {
  rowIndex: number;
  columnIndex: number;
};

export default function Guess({ rowIndex, columnIndex }: GuessProps) {
  const { guessRows, rowComplete } = useContext(GameContext) as GameContextType;
  const [guessColorClass, setGuessColorClass] = useState("bg-slate-600");

  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: "color",
      canDrop: () => rowIndex > 0 && !rowComplete(guessRows, rowIndex - 1),
      drop: (color: ColorProps) =>
        guessColor(rowIndex, columnIndex, color.colorName),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  function guessColor(
    rowIndex: number,
    columnIndex: number,
    colorName: string
  ) {
    setGuessColorClass(COLORS[colorName]);
    guessRows[rowIndex - 1][columnIndex] = true;

    console.log({ guessRows });
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
