const tasks = [
  { title: "Design Landing Page", tag: "Website", priority: "High", status: "To Do" },
  { title: "API Integration", tag: "Mobile App", priority: "Medium", status: "In Progress" },
  { title: "Write Documentation", tag: "Client Portal", priority: "Low", status: "Done" },
  { title: "Test New Features", tag: "CRM System", priority: "High", status: "To Do" },
  { title: "Fix Login Bug", tag: "Internal Tool", priority: "Medium", status: "In Progress" },
];

const statusColor = {
  "To Do": "bg-blue-100 text-blue-600",
  "In Progress": "bg-orange-100 text-orange-600",
  "Done": "bg-green-100 text-green-600",
};

export default function MyTasks() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold text-slate-800 mb-4">
        My Tasks
      </h3>

      <ul className="space-y-4">
        {tasks.map((task, i) => (
          <li key={i} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-slate-500">
                {task.tag} • {task.priority}
              </p>
            </div>

            <span
              className={`text-xs px-3 py-1 rounded-full ${statusColor[task.status]}`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
