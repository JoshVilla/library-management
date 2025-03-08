"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogOut, Loader2, Menu } from "lucide-react";
import { IAdmin, IStudent } from "@/app/service/types";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "../ui/alert-dialog";
import { logoutAdmin } from "@/app/redux/slices/adminInfoSlice";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/app/redux/slices/studentInfoSlice";
import { persistor } from "@/app/redux/store";
import { useRouter } from "next/navigation";

export interface IMenuSideBar {
  icon: React.ReactElement;
  path: string;
  label: string;
}

interface Props {
  menuProp: IMenuSideBar[];
  title: string;
  state: IAdmin | IStudent;
  user: "student" | "admin";
}

const Sidebar = ({ menuProp, title, state, user }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark" || theme === "system";
  const textColor = isDark ? "text-white" : "text-black";
  const hoverColor = isDark ? "hover:text-gray-200" : "hover:text-gray-800";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile Sidebar Toggle

  const renderName = () => {
    return user === "student"
      ? (state as IStudent)?.firstname
      : (state as IAdmin)?.username;
  };

  const logout = async () => {
    setLoading(true);
    try {
      dispatch(user === "student" ? logoutUser() : logoutAdmin());
      await persistor.purge();
      await persistor.flush();
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  const goToProfile = () => {
    router.push(user === "student" ? "/student/profile" : "/admin/profile");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-3 left-4 z-50 bg-gray-800 text-white p-2 rounded bg-[#f9f9f9] dark:bg-[#1a1a1a] "
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar (Desktop) */}
      <div
        className={`hidden md:flex md:w-1/6 min-h-screen border-r ${textColor} flex-col`}
      >
        <div className="p-4 lg:block hidden">
          <div className="text-2xl font-semibold py-6">{title}</div>
        </div>

        <div className="flex-1 flex flex-col justify-between p-4">
          <ul className="flex flex-col gap-4">
            {menuProp.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className={`${hoverColor} p-3 rounded-lg cursor-pointer flex justify-center lg:justify-start items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap overflow-hidden`}
              >
                <div className="w-5 h-5">{menu.icon}</div>
                <span className="font-medium truncate lg:block hidden">
                  {menu.label}
                </span>
              </Link>
            ))}
          </ul>

          <div className="pt-4 border-t flex items-center justify-between">
            <div className="text-sm">
              <span className="font-semibold">Hello! </span>
              <span
                className="hover:underline cursor-pointer"
                onClick={goToProfile}
              >
                {renderName()}
              </span>
            </div>
            <div>
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
                <LogOut />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-2/3 sm:w-1/2 h-full bg-white bg-[#f9f9f9] dark:bg-[#1a1a1a]  z-50 flex flex-col p-4 shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="self-end text-lg mb-4"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <div className="text-2xl font-semibold py-4">{title}</div>

        <ul className="flex flex-col gap-4 flex-grow">
          {menuProp.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className={`${hoverColor} p-3 rounded-lg cursor-pointer flex items-center gap-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap overflow-hidden`}
              onClick={() => setSidebarOpen(false)}
            >
              <div className="w-5 h-5">{menu.icon}</div>
              <span className="font-medium truncate">{menu.label}</span>
            </Link>
          ))}
        </ul>

        <div className="pt-4 border-t flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold">Hello! </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={goToProfile}
            >
              {renderName()}
            </span>
          </div>
          <div>
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
              <LogOut />
            </Button>
          </div>
        </div>
      </div>

      {/* Click outside to close Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Logout Confirmation */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to log out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will be signed out of your account. Any unsaved changes will
              be lost. Do you want to proceed with logging out?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={logout} disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Logging out...
                </div>
              ) : (
                "Log out"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Sidebar;
