import Board from "./components/Board";
import ColorPanel from "./components/ColorPanel";
import { GameContextProvider } from "./contexts/GameContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="mastermind w-96 h-full pt-2 mx-auto">
      <div className="mastermind-header">
        <h1 className="text-center text-3xl font-bold pb-5">Master Mind</h1>
      </div>

      <GameContextProvider>
        <DndProvider backend={HTML5Backend}>
          <ColorPanel />
          <Board />
        </DndProvider>

        <div className="flex justify-center pt-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            New Game
          </button>
        </div>
      </GameContextProvider>
    </div>
  );
}

export default App;
