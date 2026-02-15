import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function ChessGame() {
  const [game, setGame] = useState(() => new Chess());
  const [isBotThinking, setIsBotThinking] = useState(false);

  // Bot move effect
  useEffect(() => {
    if (!game.isGameOver() && game.turn() === "b") {
      setIsBotThinking(true);

      const timer = setTimeout(() => {
        makeBotMove();
        setIsBotThinking(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [game]);

  function makeBotMove() {
    const moves = game.moves();

    if (moves.length === 0) return;

    const randomMove =
      moves[Math.floor(Math.random() * moves.length)];

    const updatedGame = new Chess(game.fen());
    updatedGame.move(randomMove);

    setGame(updatedGame);
  }

  function onDrop(sourceSquare, targetSquare) {
    if (game.turn() !== "w" || game.isGameOver()) {
      return false;
    }

    const updatedGame = new Chess(game.fen());

    const move = updatedGame.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    setGame(updatedGame);
    return true;
  }

  function restartGame() {
    setGame(new Chess());
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">
        Chess vs Bot
      </h2>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={500}
        />
      </div>

      <div className="mt-4 text-slate-600">
        {game.isGameOver()
          ? "Game Over"
          : game.turn() === "w"
          ? "Your Turn (White)"
          : isBotThinking
          ? "Bot Thinking..."
          : "Bot Turn"}
      </div>

      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Restart Game
      </button>
    </div>
  );
}
