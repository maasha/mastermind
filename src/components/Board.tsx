import { useContext } from "react";
import { GameContext, GameContextType } from "../contexts/GameContext";
import Row from "./Row";

export default function Board() {
  const { rows } = useContext(GameContext) as GameContextType;
  const rowList = [];

  for (let i = 0; i < rows; i += 1) {
    rowList.push(<Row key={i} rowIndex={i} />);
  }

  return <div className="border-3 rounded bg-slate-500 mx-auto">{rowList}</div>;
}
