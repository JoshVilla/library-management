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

  return (
    <div className="min-h-screen flex">
      <Sidebar
        title={sidebarTitle}
        menuProp={menuProps}
        state={state}
        user="admin"
      />
      <div className="flex-1 p-4 overflow-y-auto">{children}</div>
      <Toaster />
    </div>
  );
}
