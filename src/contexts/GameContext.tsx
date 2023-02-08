import React, { ReactNode, useMemo, useState } from "react";
import { COLUMNS, ROWS } from "../static/board-dimensions.const";
import { COLORS } from "../static/colors.const";

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

type GameContextType = {
  rows: number;
  columns: number;
  activeRow: string[];
  activeRowIndex: number;
  setActiveRow: React.Dispatch<React.SetStateAction<string[]>>;
};

export const GameContext = React.createContext<GameContextType>(
  null as unknown as GameContextType
);

type GameContextProviderProps = {
  children: ReactNode;
};

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [activeRow, setActiveRow] = useState<string[]>([]);
  const codeToGuess = compileCode();

  console.log({ codeToGuess });

  const boardValue = useMemo(() => {
    return {
      rows: ROWS,
      columns: COLUMNS,
      codeToGuess,
      activeRowIndex,
      setActiveRowIndex,
      activeRow,
      setActiveRow,
    };
  }, []);

  return (
    <GameContext.Provider value={boardValue}>{children}</GameContext.Provider>
  );
}
