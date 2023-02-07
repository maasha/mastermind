import Board from "./components/Board";
import { BoardContextProvider } from "./contexts/BoardContext";

const ROWS = 12;
const COLUMNS = 4;

function App() {
  return (
    <div className="mastermind">
      <div className="mastermind-header">
        <h1>Mastermind</h1>
      </div>

      <BoardContextProvider>
        <Board />
      </BoardContextProvider>

      <div className="mastermind-footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
