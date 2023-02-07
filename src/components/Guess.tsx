import { useDrop } from "react-dnd";
import { ColorProps } from "./Color";

type GuessProps = {
  rowIndex: number;
  columnIndex: number;
};

export default function Guess({ rowIndex, columnIndex }: GuessProps) {
  const [{ isOver, canDrop }, dropRef] = useDrop(
    () => ({
      accept: "color",
      canDrop: () => true,
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
    ColumnIndex: number,
    colorName: string
  ) {
    console.log({ rowIndex, columnIndex, colorName });
  }

  return (
    <span
      ref={dropRef}
      className={`h-8 w-8 p-1 inline-block border-2 border-black rounded-full ${
        isOver && canDrop ? "bg-red-100" : "bg-slate-600"
      }`}
    ></span>
  );
}
