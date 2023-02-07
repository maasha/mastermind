import { useContext } from "react";
import { BoardContext, BoardContextType } from "../contexts/BoardContext";

export default function Guess() {
  const { columns } = useContext(BoardContext) as BoardContextType;

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
    columnsList.push(
      <span
        key={i}
        className="h-8 w-8 p-1 inline-block border-2 border-black rounded-full bg-yellow-900"
      ></span>
    );
  }

  return <div className="flex justify-between w-3/4 p-2">{columnsList}</div>;
}
