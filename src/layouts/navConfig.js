import { MdOutlineDashboard, MdMoreTime } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { IoIosAnalytics } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export const navConfig = [
  { label: "Dashboard", to: "/", icon: MdOutlineDashboard },

  {
    label: "Project",
    icon: LiaProjectDiagramSolid,
    submenu: [
      { label: "Project List", to: "/projects" },
      { label: "Sprint", to: "/sprints" },
      { label: "Tasks", to: "/tasks" },
    ],
  },

  { label: "Time Tracking", to: "/time", icon: MdMoreTime },
  { label: "Analytics", to: "/analytics", icon: IoIosAnalytics },
  { label: "Games", to: "/games", icon: CgGames },
  { label: "Notifications", to: "/notifications", icon: IoMdNotificationsOutline },
  { label: "Settings", to: "/settings", icon: IoSettingsOutline },
];
