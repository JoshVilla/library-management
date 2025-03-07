"use client";

import Sidebar from "@/components/sidebar/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { DoorOpen } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { menuProps, sidebarTitle } from "./menuProps";
import { logoutAdmin } from "../redux/slices/adminInfoSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../redux/store";
import { IAdmin } from "../service/types";
import { RootState } from "../redux/store";
export default function RootLayout({ children }: { children: ReactNode }) {
  const state = useSelector(
    (state: RootState) => state.adminInfo.adminInfo
  ) as IAdmin;
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatch(logoutAdmin());
    persistor.purge();
    persistor.flush();
    router.push("/");
  };

  const goToProfile = () => {
    router.push("/admin/profile");
  };
  return (
    <div className="min-h-screen flex">
      <Sidebar
        title={sidebarTitle}
        menuProp={menuProps}
        state={state}
        user="admin"
      />
      <div className="flex-1 p-4">
        {/* <div className="p-4 bg-[#f9f9f9] dark:bg-[#1a1a1a] flex justify-between items-center gap-4 mb-4 rounded-lg">
          <div>
            <span className="text-md font-semibold">Hello! </span>
            <span
              className="hover:underline cursor-pointer"
              onClick={goToProfile}
            >
              {state.username}
            </span>
          </div>
          <AlertDialogPrimitive.Root>
            <AlertDialogPrimitive.Trigger asChild>
              <Button variant="ghost" className="flex gap-2">
                <DoorOpen />
                Logout
              </Button>
            </AlertDialogPrimitive.Trigger>
            <AlertDialogPrimitive.Portal>
              <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <AlertDialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[425px]">
                <div className="flex flex-col space-y-2 text-center sm:text-left gap-2">
                  <AlertDialogPrimitive.Title className="text-lg font-semibold text-xl">
                    Are you sure you want to logout?
                  </AlertDialogPrimitive.Title>
                  <AlertDialogPrimitive.Description className="text-sm text-muted-foreground text-gray-500">
                    You will be signed out of your account. Any unsaved changes
                    will be lost. Do you want to proceed with logging out?
                  </AlertDialogPrimitive.Description>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2">
                  <AlertDialogPrimitive.Cancel asChild>
                    <Button variant="outline" size="sm" className="mt-0">
                      Cancel
                    </Button>
                  </AlertDialogPrimitive.Cancel>
                  <AlertDialogPrimitive.Action asChild>
                    <Button onClick={logout} size="sm">
                      Logout
                    </Button>
                  </AlertDialogPrimitive.Action>
                </div>
              </AlertDialogPrimitive.Content>
            </AlertDialogPrimitive.Portal>
          </AlertDialogPrimitive.Root>
        </div> */}
        {children}
      </div>
      <Toaster />
    </div>
  );
}
