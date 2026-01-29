import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export default function NavItem({
  icon: Icon,
  label,
  to,
  submenu,
  collapsed,
}) {
  const [openSub, setOpenSub] = useState(false);

  const handleClick = (e) => {
    if (submenu) {
      e.preventDefault(); 
      setOpenSub(!openSub);
    }
  };

  return (
    <li className="relative">
      <NavLink
        to={to || "#"}
        onClick={handleClick}
        className={`
          flex items-center h-11 px-4 rounded-xl transition cursor-pointer
          ${collapsed ? "justify-center" : "gap-3"}
          hover:bg-base-200
        `}
      >
        <Icon className="text-lg" />

        {!collapsed && (
          <>
            <span className="text-sm font-medium flex-1">
              {label}
            </span>

            {submenu && (
              <IoChevronDownOutline
                className={`
                  transition-transform duration-300
                  ${openSub ? "rotate-180" : ""}
                `}
              />
            )}
          </>
        )}
      </NavLink>

      {submenu && openSub && !collapsed && (
        <div className="mt-2 ml-5 pl-4 border-l border-gray-300 space-y-1">
          {submenu.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `
                block text-sm px-3 py-2 rounded-lg
                ${isActive ? "bg-base-200" : "hover:bg-base-200"}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      {submenu && collapsed && (
        <div className="absolute left-[80px] top-0 hidden group-hover:block bg-base-100 shadow-xl rounded-xl p-3 w-48 z-50">
          <p className="font-semibold text-sm mb-2">{label}</p>

          {submenu.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="block text-sm px-3 py-2 rounded-lg hover:bg-base-200"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
}
