import { useNavigate } from "react-router-dom";

export default function GamesList() {
  const navigate = useNavigate();

  const games = [
    { name: "Chess Game", path: "chess" },
    { name: "Memory Game", path: "memory" },
    { name: "Sudoku", path: "sudoku" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Games</h1>

      <div className="grid grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.name}
            onClick={() => navigate(game.path)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium">{game.name}</h3>
            <p className="text-sm text-slate-500 mt-2">
              Click to play
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
