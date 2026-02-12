import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { project: "Website", tasks: 6 },
  { project: "Mobile App", tasks: 4 },
  { project: "CRM", tasks: 8 },
  { project: "Internal Tool", tasks: 6 },
];

export default function TasksByProjectCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-slate-800 mb-4">
        Tasks by Project
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="project" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar
              dataKey="tasks"
              fill="#3b82f6"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
