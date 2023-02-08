import React, { ReactNode, useEffect, useMemo, useState } from "react";
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
  currentGuess: string[];
  activeRowIndex: number;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string[]>>;
  correctPositions: number;
  correctColors: number;
};

export const GameContext = React.createContext<GameContextType>(
  null as unknown as GameContextType
);

type GameContextProviderProps = {
  children: ReactNode;
};

function updateCorrectColors(
  codeToGuess: string[],
  currentGuess: string[]
): number {
  let correct = 0;

  const uniqueSet1 = new Set<string>();
  const uniqueSet2 = new Set<string>();

  codeToGuess.forEach((color) => uniqueSet1.add(color));
  currentGuess.forEach((color) => uniqueSet2.add(color));

  for (const color of Array.from(uniqueSet1)) {
    if (uniqueSet2.has(color)) {
      correct += 1;
    }
  }

  return correct;
}

function updateCorrectPositions(
  codeToGuess: string[],
  currentGuess: string[]
): number {
  let correct = 0;

  for (let i = 0; i < codeToGuess.length; i += 1) {
    if (codeToGuess[i] == null) continue;

    if (codeToGuess[i] === currentGuess[i]) {
      correct += 1;
    }
  }

  return correct;
}

const codeToGuess = compileCode();

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [correctColors, setCorrectColors] = useState(0);
  const [correctPositions, setCorrectPositions] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(Array(COLUMNS));

  useEffect(() => {
    setCorrectColors(updateCorrectColors(codeToGuess, currentGuess));
    setCorrectPositions(updateCorrectPositions(codeToGuess, currentGuess));

    console.log("USE EFFECT", { correctColors, correctPositions });
  }, [JSON.stringify(currentGuess)]);

  const boardValue = {
    rows: ROWS,
    columns: COLUMNS,
    codeToGuess,
    activeRowIndex,
    setActiveRowIndex,
    currentGuess,
    setCurrentGuess,
    correctPositions,
    correctColors,
  };

  return (
    <GameContext.Provider value={boardValue}>{children}</GameContext.Provider>
  );
}
