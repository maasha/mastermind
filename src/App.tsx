import Board from "./components/Board";
import ColorPanel from "./components/ColorPanel";
import { BoardContextProvider } from "./contexts/BoardContext";

function App() {
  return (
    <div className="mastermind w-full h-full p-20 pt-5">
      <div className="mastermind-header">
        <h1 className="text-center text-3xl font-bold p-10">Mastermind</h1>
      </div>

      <BoardContextProvider>
        <ColorPanel />
        <Board />
      </BoardContextProvider>

      <div className="mastermind-footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
