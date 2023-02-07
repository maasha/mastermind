import React, { ReactNode, useMemo } from "react";
import { COLUMNS, ROWS } from "../static/board-dimensions.const";

export type GameContextType = {
  rows: number;
  columns: number;
};

export const GameContext = React.createContext<GameContextType | null>(null);

type GameContextProviderProps = {
  children: ReactNode;
};

export function GameContextProvider({ children }: GameContextProviderProps) {
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
