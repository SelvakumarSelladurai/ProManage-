import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import {Dashboard} from "../features/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    }
])