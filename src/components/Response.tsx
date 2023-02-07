import { useContext } from "react";
import { BoardContext, BoardContextType } from "../contexts/BoardContext";

export default function Response() {
  const { columns } = useContext(BoardContext) as BoardContextType;

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
    columnsList.push(
      <span
        key={i}
        className="h-4 w-4 p-1 inline-block border-2 border-black rounded-full bg-yellow-900"
      ></span>
    );
  }

  return (
    <div className="grid grid-cols-2 w-10 pr-1 gap-px content-center">
      {columnsList}
    </div>
  );
}
