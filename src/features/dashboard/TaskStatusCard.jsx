import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "To Do", value: 6, color: "#3b82f6" },
  { name: "In Progress", value: 8, color: "#fb923c" },
  { name: "Done", value: 10, color: "#22c55e" },
];

export default function TaskStatusCard() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-slate-800 mb-6">
        Task Status
      </h3>

      <div className="relative mx-auto w-65 h-65">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx={130}
              cy={130}
              innerRadius={85}
              outerRadius={120}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-sm font-medium text-slate-500">
            Total
          </p>
          <p className="text-3xl font-bold text-slate-800">
            {total}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-8 text-sm">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-slate-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
