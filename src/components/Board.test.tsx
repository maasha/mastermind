import { render, screen } from "@testing-library/react";
import Board from "./Board";
import { GameContext } from "../contexts/GameContext";
import { describe, expect, it } from "vitest";
import IGuess from "../interfaces/guess.interface";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// add drag drop context to below test

describe("Board", () => {
  it("renders the board", () => {
    const rows = 10;
    const columns = 4;
    const guessRows: IGuess[] = [
      {
        guess: ["white", "red", "yellow", "black"],
        correctPositions: 0,
        correctColors: 0,
      },
    ];

    const boardValue = {
      rows,
      columns,
      codeToGuess: [1, 2, 3, 4],
      activeRowIndex: 0,
      guessRows,
      setGuessRows: () => {},
      gameWon: false,
      gameOver: false,
    };

    render(
      <DndProvider backend={HTML5Backend}>
        <GameContext.Provider value={boardValue}>
          <Board />
        </GameContext.Provider>
      </DndProvider>
    );

    const board = screen.getByTestId("board");
    expect(board).toBeDefined();
  });
});
