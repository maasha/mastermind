import _ from "lodash";
import React, { ReactNode, useEffect, useState } from "react";
import IGuess from "../interfaces/guess.interface";
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

function compileGuessRows(): IGuess[] {
  const rows = [];

  for (let i = 0; i < ROWS; i += 1) {
    rows.push({
      guess: Array(COLUMNS),
      correctPositions: 0,
      correctColors: 0,
    });
  }

  return rows;
}

function correctColors(codeToGuess: string[], currentGuess: IGuess): number {
  let correct = 0;

  const uniqueSet1 = new Set<string>();
  const uniqueSet2 = new Set<string>();

  codeToGuess.forEach((color) => uniqueSet1.add(color));
  currentGuess.guess.forEach((color) => uniqueSet2.add(color));

  for (const color of Array.from(uniqueSet1)) {
    if (uniqueSet2.has(color)) {
      correct += 1;
    }
  }

  return correct;
}

function correctPositions(codeToGuess: string[], currentGuess: IGuess): number {
  let correct = 0;

  for (let i = 0; i < codeToGuess.length; i += 1) {
    if (codeToGuess[i] == null) continue;

    if (codeToGuess[i] === currentGuess.guess[i]) {
      correct += 1;
    }
  }

  return correct;
}

const codeToGuess = compileCode();

type GameContextType = {
  rows: number;
  columns: number;
  guessRows: IGuess[];
  setGuessRows: React.Dispatch<React.SetStateAction<IGuess[]>>;
  activeRowIndex: number;
  gameWon: boolean;
  gameOver: boolean;
};

type GameContextProviderProps = {
  children: ReactNode;
};

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [guessRows, setGuessRows] = useState<IGuess[]>(compileGuessRows());

  // useMemo(() => codeToGuess = compileCode(), [])

  useEffect(() => {
    const copy = _.cloneDeep(guessRows);
    copy[activeRowIndex].correctColors = correctColors(
      codeToGuess,
      copy[activeRowIndex]
    );
    copy[activeRowIndex].correctPositions = correctPositions(
      codeToGuess,
      copy[activeRowIndex]
    );

    setGuessRows(copy);
  }, [JSON.stringify(guessRows[activeRowIndex])]);

  useEffect(() => {
    if (guessRows[activeRowIndex].correctPositions === COLUMNS) {
      setGameWon(true);
    }
  }, [guessRows[activeRowIndex].correctPositions]);

  const boardValue = {
    rows: ROWS,
    columns: COLUMNS,
    codeToGuess,
    activeRowIndex,
    setActiveRowIndex,
    guessRows,
    setGuessRows,
    gameWon,
    gameOver,
  };

  return (
    <GameContext.Provider value={boardValue}>{children}</GameContext.Provider>
  );
}

export const GameContext = React.createContext<GameContextType>(
  null as unknown as GameContextType
);
