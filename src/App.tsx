import Board from "./components/Board";
import ColorPanel from "./components/ColorPanel";
import { BoardContextProvider } from "./contexts/BoardContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="mastermind w-full h-full p-20 pt-5">
      <div className="mastermind-header">
        <h1 className="text-center text-3xl font-bold p-10">Master Mind</h1>
      </div>

      <DndProvider backend={HTML5Backend}>
        <ColorPanel />
        <BoardContextProvider>
          <Board />
        </BoardContextProvider>
      </DndProvider>

      <div className="mastermind-footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
