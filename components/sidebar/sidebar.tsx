import Link from "next/link";
import React from "react";

export interface IMenuSideBar {
  path: string;
  label: string;
}
interface Props {
  menuProp: IMenuSideBar[];
  title: string;
}

const Sidebar = ({ menuProp, title }: Props) => {
  return (
    <div className="hidden md:block md:w-1/6 h-screen border text-black p-2">
      <div className="text-lg">{title}</div>
      <div className="mt-10">
        <ul className="flex flex-col gap-6">
          {menuProp.map((menu) => (
            <Link
              className="hover:bg-gray-200 p-2 rounded cursor-pointer"
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
