import Board from "./components/Board";
import PegPanel from "./components/PegPanel";
import { GameContextProvider } from "./contexts/GameContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="mastermind w-96 h-full pt-2 mx-auto">
      <div className="mastermind-header flex justify-center">
        <h1 className="text-3xl font-bold pb-5">Master Mind</h1>
        <img src="/brain.svg" alt="Brain Logo" className="h-10 ml-4"></img>
      </div>

      <DndProvider backend={HTML5Backend}>
        <GameContextProvider>
          <PegPanel />
          <Board />
        </GameContextProvider>
      </DndProvider>
    </div>
  );
}

export default App;
