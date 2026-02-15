import { useState } from "react";
import sudoku from "sudoku";

export default function SudokuGame() {
  const [puzzle, setPuzzle] = useState(() => sudoku.makepuzzle());
  const [solution, setSolution] = useState(() =>
    sudoku.solvepuzzle(puzzle)
  );
  const [board, setBoard] = useState(puzzle);

  function newGame() {
    const newPuzzle = sudoku.makepuzzle();
    const newSolution = sudoku.solvepuzzle(newPuzzle);

    setPuzzle(newPuzzle);
    setSolution(newSolution);
    setBoard(newPuzzle);
  }

  function handleChange(index, value) {
    if (puzzle[index] !== null) return; // Prevent editing fixed cells

    const number = value === "" ? null : Number(value) - 1;

    if (number === null || (number >= 0 && number <= 8)) {
      const newBoard = [...board];
      newBoard[index] = number;
      setBoard(newBoard);
    }
  }

  function isCorrect(index) {
    if (board[index] === null) return true;
    return board[index] === solution[index];
  }

  function resetGame() {
    setBoard(puzzle);
  }

  return (
    <div className="flex flex-col items-center p-6 bg-slate-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">
        Sudoku
      </h2>

      <div className="grid grid-cols-9 gap-1 bg-black p-1 rounded-lg">
        {board.map((cell, index) => {
          const row = Math.floor(index / 9);
          const col = index % 9;

          return (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={cell !== null ? cell + 1 : ""}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              className={`
                w-10 h-10 text-center text-lg font-medium
                border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-400
                ${
                  puzzle[index] !== null
                    ? "bg-gray-200 font-bold"
                    : isCorrect(index)
                    ? "bg-white"
                    : "bg-red-200"
                }
              `}
            />
          );
        })}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={newGame}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          New Game
        </button>

        <button
          onClick={resetGame}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
