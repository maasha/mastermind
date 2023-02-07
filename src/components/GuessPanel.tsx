import { useContext } from "react";
import { BoardContext, BoardContextType } from "../contexts/BoardContext";
import Guess from "./Guess";

export default function GuessPanel() {
  const { columns } = useContext(BoardContext) as BoardContextType;

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
    columnsList.push(<Guess key={i}></Guess>);
  }

  return <div className="flex justify-between w-3/4 p-2">{columnsList}</div>;
}
