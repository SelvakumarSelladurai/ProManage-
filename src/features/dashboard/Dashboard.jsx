import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import TaskStatusCard from "./TaskStatusCard";
import TimeSpentCard from "./TimeSpentCard";
import MyTasks from "./MyTasks";
import WorkSession from "./WorkSession";

export function Dashboard() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <DashboardHeader />

      <StatsCards />

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <TaskStatusCard />
        </div>
        <div className="col-span-2">
          <TimeSpentCard />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <MyTasks />
        </div>
        <div className="col-span-1 space-y-6">
          <WorkSession />
        </div>
      </div>
    </div>
  );
}
