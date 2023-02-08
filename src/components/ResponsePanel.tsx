import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

type ResponseProps = {
  rowIndex: number;
};

export default function Response({ rowIndex }: ResponseProps) {
  const { columns, guessRows } = useContext(GameContext);

  let correctPositions = 0;
  let correctColors = 0;

  if (!guessRows[rowIndex].guess.some((v) => v == null)) {
    correctPositions = guessRows[rowIndex].correctPositions;
    correctColors = guessRows[rowIndex].correctColors;
  }

  const columnsList = [];

  for (let i = 0; i < correctPositions; i += 1) {
    columnsList.push(
      <span
        key={`pos-${i}`}
        className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-black"
      ></span>
    );
  }

  for (let i = 0; i < correctColors - correctPositions; i += 1) {
    columnsList.push(
      <span
        key={`col-${i}`}
        className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-white"
      ></span>
    );
  }

  for (
    let i = correctPositions + (correctColors - correctPositions);
    i < columns;
    i += 1
  ) {
    columnsList.push(
      <span
        key={i}
        className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-slate-600"
      ></span>
    );
  }

  return (
    <div className="grid grid-cols-2 w-10 pr-1 gap-px content-center">
      {columnsList}
    </div>
  );
}
