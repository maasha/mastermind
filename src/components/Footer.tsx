import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function Footer() {
  const { gameWon, gameOver } = useContext(GameContext);

  const msgClass = "text-xl flex justify-center font-bold";

  return (
    <div>
      {gameWon && (
        <div className={msgClass}>Game Won - refresh to play again</div>
      )}
      {gameOver && (
        <div className={msgClass}>Game Over - refresh to play again</div>
      )}
    </div>
  );
}
