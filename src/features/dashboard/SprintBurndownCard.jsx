import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Day 1", remaining: 40 },
  { day: "Day 2", remaining: 36 },
  { day: "Day 3", remaining: 30 },
  { day: "Day 4", remaining: 22 },
  { day: "Day 5", remaining: 15 },
  { day: "Day 6", remaining: 8 },
  { day: "Day 7", remaining: 0 },
];

export default function SprintBurndownCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-slate-800 mb-4">
        Sprint Burndown
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="remaining"
              stroke="#ef4444"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
