import { Outlet } from "react-router-dom";

export default function GamesLayout() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Outlet />
    </div>
  );
}
