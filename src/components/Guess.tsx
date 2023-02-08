import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { GameContext } from "../contexts/GameContext";
import { COLORS } from "../static/colors.const";
import { PegProps } from "./Peg";
import _ from "lodash";

type GuessProps = {
  active: boolean;
  rowIndex: number;
  columnIndex: number;
};

export default function Guess({ active, rowIndex, columnIndex }: GuessProps) {
  const { setGuessRows } = useContext(GameContext);

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

    setGuessRows((prev) => {
      const copy = _.cloneDeep(prev);
      copy[rowIndex].guess[columnIndex] = colorName;
      return copy;
    });
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
