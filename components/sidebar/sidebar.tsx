"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogOut, Loader2 } from "lucide-react";
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

  const renderName = () => {
    if (user === "student") {
      return (state as IStudent)?.firstname;
    }
    return (state as IAdmin)?.username;
  };

  const logout = async () => {
    setLoading(true); // Start loading
    try {
      if (user === "student") {
        dispatch(logoutUser());
      } else {
        dispatch(logoutAdmin());
      }
      await persistor.purge();
      await persistor.flush();
      router.push("/");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const goToProfile = () => {
    if (user === "student") {
      router.push("/student/profile");
    } else {
      router.push("/admin/profile");
    }
  };

  return (
    <div
      className={`hidden md:flex md:w-1/6 min-h-screen border-r ${textColor} flex-col`}
    >
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
    </div>
  );
};

export default Sidebar;
