export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-slate-800">
        Dashboard
      </h1>

      <div className="flex items-center gap-4 text-slate-500">
        <span>🕒 10:45 AM</span>
        <span>🔔</span>
      </div>
    </div>
  );
}
