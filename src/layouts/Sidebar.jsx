import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavItem from "./NavItems";
import { navConfig } from "./navConfig";
import Logo from "../assets/logo.png";
import CollabLogo from "../assets/logo1.png";

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
      <div className="flex-shrink-0">
        {open ? (
          <div className="h-16 w-full flex items-center justify-center relative">
            <img src={Logo} alt="Logo" className="w-25 h-25" />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-base-200 hover:bg-base-300 flex items-center justify-center"
            >
              <FaChevronLeft size={12} />
            </button>
          </div>
        ) : (
          <div className="pt-4 pb-3 flex flex-col items-center gap-3">
            <img src={CollabLogo} alt="Logo" className="h-8 object-contain" />
            <button
              onClick={() => setOpen(true)}
              className="w-7 h-7 rounded-lg bg-base-200 hover:bg-base-300 flex items-center justify-center"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        )}
      </div>

      <div className="flex-shrink-0">
        {open ? (
          <div className="px-4 mt-3">
            <div className="relative">
              <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-11 pl-12 pr-20 rounded-xl bg-base-200 outline-none text-sm"
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
        ) : (
          <div className="mt-3 flex justify-center">
            <div className="w-11 h-11 rounded-xl bg-base-200 flex items-center justify-center">
              <CiSearch className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}
      </div>

      {/* MENU (NO SCROLL) */}
      <div className="mt-5 px-2 flex-1 overflow-hidden">
        <ul className="space-y-1">
          {navConfig.map((item) => (
            <NavItem key={item.label} {...item} collapsed={!open} />
          ))}
        </ul>
      </div>

      {/* PROFILE */}
      <div className="flex-shrink-0 p-3">
        <div
          className={`
            bg-base-200 rounded-2xl p-3 flex items-center gap-3
            ${!open ? "justify-center" : ""}
          `}
        >
          <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center font-semibold shrink-0">
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
