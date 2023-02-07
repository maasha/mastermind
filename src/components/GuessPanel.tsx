import { useContext } from "react";
import { GameContext, GameContextType } from "../contexts/GameContext";
import Guess from "./Guess";

export default function GuessPanel() {
  const { columns } = useContext(GameContext) as GameContextType;

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
    columnsList.push(<Guess key={i}></Guess>);
  }

  return <div className="flex justify-between w-3/4 p-2">{columnsList}</div>;
}
