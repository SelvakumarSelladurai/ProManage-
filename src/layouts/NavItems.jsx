import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function NavItems({
  icon: Icon,
  label,
  to,
  submenu,
  collapsed,
}) {
  const [open, setOpen] = useState(false);

  if (!submenu) {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `
              flex items-center h-11 px-3 rounded-xl transition
              ${collapsed ? "justify-center" : "gap-3"}
              ${isActive ? "bg-base-200 font-medium" : "hover:bg-base-200"}
            `
          }
        >
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <Icon />
          </span>
          {!collapsed && <span className="text-sm">{label}</span>}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center h-11 px-3 rounded-xl transition hover:bg-base-200
          ${collapsed ? "justify-center" : "gap-3"}
        `}
      >
        <span className="w-6 h-6 flex items-center justify-center shrink-0">
          <Icon />
        </span>

        {!collapsed && (
          <>
            <span className="text-sm flex-1 text-left">{label}</span>
            <FaChevronDown
              size={12}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>

      {!collapsed && open && (
        <ul className="mt-2 ml-6 pl-4 border-l border-gray-200 space-y-1">
          {submenu.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className="block text-sm px-3 py-2 rounded-lg hover:bg-base-200"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {collapsed && open && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-50">
          <div className="bg-base-100 rounded-2xl shadow-2xl p-2 min-w-45">
            {submenu.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className="block px-4 py-2 text-sm rounded-xl hover:bg-base-200 transition"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
