import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function Footer() {
  const { gameWon, gameOver } = useContext(GameContext);

  return (
    <div>
      {gameWon && <div>Game Won - refresh to play again</div>}
      {gameOver && <div>Game Over - refresh to play again</div>}
    </div>
  );
}
