import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Scrollable area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
