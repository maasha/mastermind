import React, { ReactNode, useMemo } from "react";
import { COLUMNS, ROWS } from "../static/board-dimensions.const";
import { COLORS } from "../static/colors.const";

export type GameContextType = {
  rows: number;
  columns: number;
  guessRows: boolean[][];
  rowComplete: typeof rowComplete;
};

export const GameContext = React.createContext<GameContextType | null>(null);

type GameContextProviderProps = {
  children: ReactNode;
};

function rowComplete(guessRows: boolean[][], rowIndex: number) {
  return guessRows[rowIndex].every((guess) => guess === true);
}

function compileGuessRows(): boolean[][] {
  const guessRows = [];

  for (let r = 0; r < ROWS; r += 1) {
    const guessRow: boolean[] = [];

    for (let c = 0; c < COLUMNS; c += 1) {
      guessRow.push(false);
    }

    guessRows.push(guessRow);
  }

  return guessRows;
}

function compileCode(allowDuplicates = false): string[] {
  const colors = Object.keys(COLORS);
  const code: string[] = [];

  while (code.length < COLUMNS) {
    const color = colors[Math.floor(Math.random() * COLUMNS)];
    if (!allowDuplicates && code.includes(color)) continue;
    code.push(color);
  }

  return code;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const guessRows = compileGuessRows();
  const codeToGuess = compileCode();

  console.log({ guessRows, codeToGuess });

  const boardValue = useMemo(() => {
    return {
      rows: ROWS,
      columns: COLUMNS,
      guessRows,
      rowComplete: rowComplete,
    };
  }, []);

  return (
    <GameContext.Provider value={boardValue}>{children}</GameContext.Provider>
  );
}
