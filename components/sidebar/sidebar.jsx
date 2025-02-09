import Link from "next/link";
import React from "react";

const Sidebar = ({ menuProp = [], title }) => {
  return (
    <div className="w-1/6 h-screen border text-black p-6">
      <div className="text-lg">{title}</div>
      <div className="mt-10">
        <ul className="flex flex-col gap-6">
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
