import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

type ResponseProps = {
  rowIndex: number;
};

export default function Response({ rowIndex }: ResponseProps) {
  const { columns } = useContext(GameContext);

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
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
