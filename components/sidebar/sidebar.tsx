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
    <div className={`hidden md:flex md:w-1/6 min-h-screen border-r ${textColor} flex-col`}>
      <div className="p-4">
        <div className="text-2xl font-semibold py-6">{title}</div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <ul className="flex flex-col gap-4">
          {menuProp.map((menu) => (
            <Link
              className={`${hoverColor} p-3 rounded-lg cursor-pointer flex items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800`}
              key={menu.path}
              href={menu.path}
            >
              <div className="w-5 h-5">{menu.icon}</div>
              <span className="font-medium">{menu.label}</span>
            </Link>
          ))}
        </ul>

        <div className="pt-4 border-t">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
