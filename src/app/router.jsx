import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { Dashboard } from "../features/dashboard/Dashboard";
import GamesLayout from "../features/games/GamesLayout";
import GamesList from "../features/games/GamesList";
import ChessGame from "../features/games/chess/ChessGame";
import SudokuGame from "../features/games/sudoku/SudokuGame";
import MemoryGame from "../features/games/memory/MemoryGame";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "games",
                element: <GamesLayout />,
                children: [
                    {
                        index: true,
                        element: <GamesList />,
                    },
                    {
                        path: "chess",
                        element: <ChessGame />,
                    },
                    {
                        path: "sudoku",
                        element: <SudokuGame />
                    },
                    {
                        path: "memory",
                        element: <MemoryGame />
                    }
                ],
            },
        ],
    },
]);
