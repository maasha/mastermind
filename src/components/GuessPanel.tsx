import { useContext, useState } from "react";
import { GameContext, GameContextType } from "../contexts/GameContext";
import Guess from "./Guess";

type GuessPanelProps = {
  rowIndex: number;
};

export default function GuessPanel({ rowIndex }: GuessPanelProps) {
  const { columns } = useContext(GameContext) as GameContextType;
  const [guesses, setGuesses] = useState();

  const columnsList = [];

  for (let i = 0; i < columns; i += 1) {
    columnsList.push(
      <Guess key={i} rowIndex={rowIndex} columnIndex={i}></Guess>
    );
  }

  return <div className="flex justify-between w-3/4 p-2">{columnsList}</div>;
}
