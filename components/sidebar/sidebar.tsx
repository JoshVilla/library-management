"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

export interface IMenuSideBar {
  path: string;
  label: string;
}

interface Props {
  menuProp: IMenuSideBar[];
  title: string;
}

const Sidebar = ({ menuProp, title }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || theme === "system";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverColor = isDark ? "hover:text-gray-200" : "hover:text-gray-800";
  return (
    <div className={`hidden md:block md:w-1/6 h-screen border p-2 ${textColor}`}>
      <div className="text-lg">{title}</div>
      <div className="mt-10">
        <ul className="flex flex-col gap-6">
          {menuProp.map((menu) => (
            <Link
              className={`${hoverColor} p-2 rounded cursor-pointer `}
              key={menu.path}
              href={menu.path}
            >
              {menu.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
