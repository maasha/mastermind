import React, { ReactNode, useMemo } from "react";
import { COLUMNS, ROWS } from "../static/board-dimensions.const";
import { Colors } from "../static/colors.enum";

export type GameContextType = {
  rows: number;
  columns: number;
};

export const GameContext = React.createContext<GameContextType | null>(null);

type GameContextProviderProps = {
  children: ReactNode;
};

function createCode(allowDuplicates = false): string[] {
  const colors = Object.keys(Colors);
  const code: string[] = [];

  while (code.length < COLUMNS) {
    const color = colors[Math.floor(Math.random() * COLUMNS)];
    if (!allowDuplicates && code.includes(color)) continue;
    code.push(color);
  }

  return code;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const codeToGuess = createCode();

  console.log({ codeToGuess });

  const boardValue = useMemo(() => {
    return {
      rows: ROWS,
      columns: COLUMNS,
    };
  }, []);

  return (
    <GameContext.Provider value={boardValue}>{children}</GameContext.Provider>
  );
}
