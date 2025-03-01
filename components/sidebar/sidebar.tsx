"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { LucideIcon } from "lucide-react";

export interface IMenuSideBar {
  icon: React.ReactElement;
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
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-10 flex flex-col h-[calc(100%-4rem)] justify-between">
        <ul className="flex flex-col gap-6">
          {menuProp.map((menu) => (
            <Link
              className={`${hoverColor} p-2 rounded cursor-pointer flex items-center gap-3 transition-colors`}
              key={menu.path}
              href={menu.path}
            >
              <div className="w-5 h-5">{menu.icon}</div>
              <span>{menu.label}</span>
            </Link>
          ))}
        </ul>
        <div className="pb-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
