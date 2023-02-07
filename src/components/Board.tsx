import { useContext } from "react";
import { BoardContext } from "../contexts/BoardContext";
import Row from "./Row";

export default function Board() {
  const { rows } = useContext(BoardContext);

  console.log("HER", rows);
  const rowList = [];

  for (let i = 0; i < rows; i += 1) {
    rowList.push(<Row key={i} />);
  }
  return <div className="mastermind-board">{rowList}</div>;
}
