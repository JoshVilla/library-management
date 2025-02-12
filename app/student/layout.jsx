"use client";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";
import { menuProps, sidebarTitle } from "./menuProps";
import { useDispatch, useSelector } from "react-redux";
import { DoorOpen } from "lucide-react";
import { persistor } from "../redux/store";
import { useRouter } from "next/navigation";
import { logoutUser } from "../redux/slices/studentInfoSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const Layout = ({ children }) => {
  const router = useRouter();
  const userInfo = useSelector((state) => state.user?.userInfo) || {}; // Fix selector
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser()); // ✅ Clear Redux state
    persistor.purge(); // ✅ Clear persisted data
    persistor.flush(); // ✅ Ensure data is removed before reloading
    localStorage.clear(); // ✅ Extra step to ensure cleanup
    router.push("/");
  };

  return (
    <div className="flex w-full">
      <Sidebar title={sidebarTitle} menuProp={menuProps} />
      <div className="w-full">
        <div className="p-4 bg-[#f9f9f9] flex justify-between items-center">
          <div className="flex items-center gap-2 ">
            <span className="text-lg font-semibold">Hello! </span>
            <Image
              src={userInfo.pictureUrl ?? "/assets/defaultProfile.jpg"}
              width={20}
              height={20}
              alt="pic"
              className="rounded-full"
            />
            <span
              className="cursor-pointer hover:underline"
              onClick={() => router.push("student/profile")}
            >
              {userInfo.firstname ? userInfo.firstname : "Guest"}
            </span>
          </div>
          <div className="flex items-center cursor-pointer hover:underline">
            <DoorOpen />
            <AlertDialog>
              <AlertDialogTrigger>Logout</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to log out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    You will be signed out of your account. Any unsaved changes
                    will be lost. Do you want to proceed with logging out?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={logout}>
                    Log out
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="px-6 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
