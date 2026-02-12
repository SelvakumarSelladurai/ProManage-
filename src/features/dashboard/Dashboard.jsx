import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import TaskStatusCard from "./TaskStatusCard";
import TimeSpentCard from "./TimeSpentCard";
import MyTasks from "./MyTasks";
import WorkSession from "./WorkSession";
import TasksByProjectCard from "./TasksByProjectCard";
import SprintBurndownCard from "./SprintBurndownCard";

export function Dashboard() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* Header */}
      <DashboardHeader />

      <StatsCards />

      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-6 flex flex-col gap-6">
          <TaskStatusCard />
          <SprintBurndownCard />
        </div>

        <div className="col-span-6 flex flex-col gap-6">
          <TimeSpentCard />
          <TasksByProjectCard />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-8">
          <MyTasks />
        </div>
        {/* <div className="relative flex items-center justify-center">
  <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75 animate-ping"></span>
  <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
</div> */}

        <div className="col-span-4">
          <WorkSession />
        </div>
      </div>
    </div>
  );
}
