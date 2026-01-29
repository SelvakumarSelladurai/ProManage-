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
      {/* HEADER */}
      <div className="h-14 px-4 flex items-center justify-between">
        {open && <span className="font-bold text-xl">✚</span>}

        <button
          onClick={() => setOpen(!open)}
          className="btn btn-xs btn-ghost"
        >
          ❯
        </button>
      </div>

      {open && (
        <div className="px-4 mt-3">
          <div className="relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="
                w-full h-11 pl-12 pr-20 rounded-xl
                bg-base-200 outline-none text-sm
                placeholder:text-gray-400
                focus:ring-2 focus:ring-primary
              "
            />

            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              <span className="px-2 py-[2px] text-xs bg-base-100 rounded-md shadow">
                ⌘
              </span>
              <span className="px-2 py-[2px] text-xs bg-base-100 rounded-md shadow">
                S
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed */}
      {!open && (
        <div className="mt-3 flex justify-center">
          <button
            className="
              w-11 h-11 rounded-xl bg-base-200
              flex items-center justify-center
              hover:bg-base-300 transition
            "
          >
            <CiSearch className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      {/* MENU */}
      <ul className="mt-5 px-2 space-y-1 flex-1 overflow-y-auto">
        {navConfig.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            collapsed={!open}
          />
        ))}
      </ul>

      {/* PROFILE */}
      <div className="p-3">
        <div
          className={`
            bg-base-200 rounded-2xl p-3 flex items-center gap-3
            ${!open && "justify-center"}
          `}
        >
          <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center font-semibold">
            S
          </div>

          {open && (
            <div>
              <div className="text-sm font-medium">Selvakumar</div>
              <div className="text-xs opacity-60">Developer</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
