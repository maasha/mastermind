import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

type ResponseProps = {
  rowIndex: number;
};

export default function Response({ rowIndex }: ResponseProps) {
  const { columns, guessRows } = useContext(GameContext);

  let i = 0;
  const columnsList = [];

  if (true) {
    while (i < guessRows[rowIndex].correctPositions) {
      columnsList.push(
        <span
          key={i}
          className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-black"
        ></span>
      );

      i += 1;
    }

    while (i < guessRows[rowIndex].correctColors) {
      columnsList.push(
        <span
          key={i}
          className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-white"
        ></span>
      );

      i += 1;
    }
  }

  while (i < columns) {
    columnsList.push(
      <span
        key={i}
        className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-slate-600"
      ></span>
    );

    i += 1;
  }

  return (
    <div className="grid grid-cols-2 w-10 pr-1 gap-px content-center">
      {columnsList}
    </div>
  );
}
