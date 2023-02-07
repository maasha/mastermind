import React, { ReactNode, useMemo } from "react";

const ROWS = 12;
const COLUMNS = 4;

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
