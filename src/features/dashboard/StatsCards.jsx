const stats = [
  {
    title: "Total Tasks",
    value: "24",
    gradient: "from-[#3B82F6] via-[#4F8DF9] to-[#60A5FA]",
  },
  {
    title: "Completed",
    value: "10",
    gradient: "from-[#22C55E] via-[#34D399] to-[#4ADE80]",
  },
  {
    title: "In Progress",
    value: "8",
    gradient: "from-[#F97316] via-[#FB923C] to-[#FDBA74]",
  },
  {
    title: "Time Tracked Today",
    value: "3h 40m",
    gradient: "from-[#8B5CF6] via-[#9F7AEA] to-[#C4B5FD]",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`
            relative overflow-hidden rounded-2xl p-6 text-white
            bg-linear-to-br ${item.gradient}
            shadow-lg
          `}
        >
          <div className="absolute inset-0 bg-white/10 pointer-events-none" />

          <p className="text-sm font-medium opacity-90 relative z-10">
            {item.title}
          </p>
          <h2 className="text-3xl font-bold mt-2 relative z-10">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
