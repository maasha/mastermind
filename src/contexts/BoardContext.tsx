import React, { ReactNode, useMemo } from "react";

const ROWS = 12;
const COLUMNS = 4;

export type BoardContextType = {
  rows: number;
  columns: number;
};

export const BoardContext = React.createContext<BoardContextType | null>(null);

type BoardContextProviderProps = {
  children: ReactNode;
};

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const boardValue = useMemo(() => {
    return {
      rows: ROWS,
      columns: COLUMNS,
    };
  }, []);

  return (
    <BoardContext.Provider value={boardValue}>{children}</BoardContext.Provider>
  );
}
