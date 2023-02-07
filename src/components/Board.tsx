import { useContext } from "react";
import { BoardContext, BoardContextType } from "../contexts/BoardContext";
import Row from "./Row";

export default function Board() {
  const { rows } = useContext(BoardContext) as BoardContextType;
  const rowList = [];

  for (let i = 0; i < rows; i += 1) {
    rowList.push(<Row key={i} />);
  }

  return (
    <div className="w-80 border-3 rounded bg-yellow-700 mx-auto">
      <Row key="result" result={true}></Row>
      {rowList}
    </div>
  );
}
