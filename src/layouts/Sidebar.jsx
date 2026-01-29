import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import NavItem from "./NavItems";
import { navConfig } from "./navConfig";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`
        h-screen m-3 rounded-3xl bg-base-100 shadow-lg
        flex flex-col transition-all duration-300
        ${open ? "w-[240px]" : "w-[72px]"}
      `}
    >

      <div className="h-14 px-4 flex items-center justify-between">
        {open && <span className="font-bold text-xl">✚</span>}
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-xs btn-ghost rotate-180"
        >
          ❮
        </button>
      </div>

      {open && (
        <div className="px-4 mt-2">
          <div className="flex items-center gap-2 h-11 px-3 rounded-xl bg-base-200">
            <CiSearch className="w-5 h-5 opacity-60" />
            <input
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">S</kbd>
          </div>
        </div>
      )}

      <p className={`mt-5 px-4 text-xs opacity-50 ${!open && "hidden"}`}>
        MAIN
      </p>

      <ul className="mt-2 px-2 space-y-1 flex-1 overflow-y-auto">
        {navConfig.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            collapsed={!open}
          />
        ))}
      </ul>

      <div className="p-3">
        <div
          className={`
            bg-base-200 rounded-2xl p-3 flex items-center gap-3
            ${!open && "justify-center"}
          `}
        >
          <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center text-lg">
            S
          </div>

          {open && (
            <div className="leading-tight">
              <div className="text-sm font-medium">Selvakumar</div>
              <div className="text-xs opacity-60">Developer</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
