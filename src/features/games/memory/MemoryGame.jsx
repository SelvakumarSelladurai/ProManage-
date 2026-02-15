import { useEffect, useState } from "react";
import {
  FaApple,
  FaAnchor,
  FaCar,
  FaCloud,
  FaHeart,
  FaStar,
  FaLeaf,
  FaSun,
} from "react-icons/fa";

const icons = [
  FaApple,
  FaAnchor,
  FaCar,
  FaCloud,
  FaHeart,
  FaStar,
  FaLeaf,
  FaSun,
];

function shuffle(array) {
  return [...array]
    .concat(array)
    .sort(() => Math.random() - 0.5)
    .map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
      matched: false,
    }));
}

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffle(icons));
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (selected.length === 2) {
      setMoves((prev) => prev + 1);

      const [first, second] = selected;

      if (first.icon === second.icon) {
        setCards((prev) =>
          prev.map((card) =>
            card.icon === first.icon
              ? { ...card, matched: true }
              : card
          )
        );
        setSelected([]);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          );
          setSelected([]);
        }, 800);
      }
    }
  }, [selected]);

  function handleClick(card) {
    if (
      card.flipped ||
      card.matched ||
      selected.length === 2
    )
      return;

    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, flipped: true } : c
      )
    );

    setSelected((prev) => [...prev, card]);
  }

  function restartGame() {
    setCards(shuffle(icons));
    setSelected([]);
    setMoves(0);
  }

  const matchedCount = cards.filter((c) => c.matched).length;

  return (
    <div className="p-6 bg-slate-50 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">
        Memory Game
      </h2>

      <div className="mb-4 text-slate-600">
        Moves: {moves}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              onClick={() => handleClick(card)}
              className={`
                w-20 h-20 rounded-xl flex items-center justify-center
                cursor-pointer transition-all duration-300
                ${
                  card.flipped || card.matched
                    ? "bg-blue-500 text-white rotate-0"
                    : "bg-white shadow-md"
                }
              `}
            >
              {(card.flipped || card.matched) && (
                <Icon size={30} />
              )}
            </div>
          );
        })}
      </div>

      {matchedCount === cards.length && (
        <div className="mt-6 text-green-600 font-semibold">
          🎉 You Won in {moves} moves!
        </div>
      )}

      <button
        onClick={restartGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Restart Game
      </button>
    </div>
  );
}
