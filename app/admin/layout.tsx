import Sidebar from "@/components/sidebar/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { DoorOpen } from "lucide-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { menuProps, sidebarTitle } from "./menuProps";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar title={sidebarTitle} menuProp={menuProps} />
      <div className="flex-1 p-4">
        <div className="p-4 bg-[#f9f9f9] dark:bg-[#1a1a1a] flex justify-end items-center gap-4 mb-4">
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
                    <Button variant="outline" className="mt-0">Cancel</Button>
                  </AlertDialogPrimitive.Cancel>
                  <AlertDialogPrimitive.Action asChild>
                    <Button asChild>
                      <Link href="/">Logout</Link>
                    </Button>
                  </AlertDialogPrimitive.Action>
                </div>
              </AlertDialogPrimitive.Content>
            </AlertDialogPrimitive.Portal>
          </AlertDialogPrimitive.Root>
        </div>
        {children}
      </div>
      <Toaster />
    </div>
  );
}
