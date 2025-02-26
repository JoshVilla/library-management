"use client";
import Sidebar from "@/components/sidebar/sidebar";
import React, { useEffect, useState } from "react";
import { menuProps, sidebarTitle } from "./menuProps";
import { useDispatch, useSelector } from "react-redux";
import { Bell, BellDot, DoorOpen, Mail, MailOpen } from "lucide-react";
import { persistor } from "../redux/store";
import { usePathname, useRouter } from "next/navigation";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { getNotification, readNotification } from "../service/api";
import { renderDate } from "@/utils/helpers";
import { Separator } from "@/components/ui/separator";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const userInfo = useSelector((state) => state.user?.userInfo) || {};
  const dispatch = useDispatch();
  const [unreadCount, setUnreadCount] = useState(null); // Simulated unread count
  const [notifData, setNotifData] = useState([]);
  const [openNotif, setOpenNotif] = useState(false);
  const logout = () => {
    dispatch(logoutUser());
    persistor.purge();
    persistor.flush();
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const fetchNotification = async () => {
    try {
      const res = await getNotification({ studentId: userInfo._id });
      if (res) {
        const unReadNotif = res.notifications.filter(
          (el) => el.isRead === false
        );
        const sortNotifs = res.notifications.sort(
          (a, b) => a.isRead - b.isRead
        );
        setNotifData(sortNotifs);
        setUnreadCount(unReadNotif.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReadNotification = async (id) => {
    try {
      await readNotification({ id });
      await fetchNotification();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full">
      <Sidebar title={sidebarTitle} menuProp={menuProps} />
      <div className="w-full">
        <div className="p-4 bg-[#f9f9f9] flex justify-between items-center">
          <div className="flex items-center gap-2">
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
          <div className="flex items-center gap-10 relative">
            {/* Notification Bell with Badge */}
            <Popover open={openNotif} onOpenChange={setOpenNotif}>
              <PopoverTrigger
                // onClick={handleNotificationClick}
                className="relative"
              >
                {unreadCount > 0 ? (
                  <BellDot className="w-6 h-6 text-gray-700" />
                ) : (
                  <Bell className="w-6 h-6 text-gray-700" />
                )}

                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {unreadCount}
                  </span>
                )}
              </PopoverTrigger>
              <PopoverContent className="w-72 max-h-80 overflow-scroll">
                <div className="">
                  <p className="font-semibold">Notifications</p>
                  {unreadCount === 0 && (
                    <p className="text-gray-500 text-sm mt-2">
                      No new notifications
                    </p>
                  )}
                  <Separator />
                  <ul className="mt-2 space-y-4">
                    {notifData.map((notif, idx) => (
                      <li
                        onClick={() => {
                          router.push(`/student/notification/${notif._id}`);
                          setOpenNotif(false);
                          !notif.isRead && handleReadNotification(notif._id);
                        }}
                        key={idx}
                        className=" text-gray-600 text-xs cursor-pointer space-y-1 hover:underline"
                      >
                        <div className="flex items-center gap-1">
                          {notif.isRead ? (
                            <MailOpen size={15} />
                          ) : (
                            <Mail size={15} />
                          )}
                          <div className="w-full truncate">{notif.message}</div>
                        </div>
                        <div>{renderDate(notif.createdAt)}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopoverContent>
            </Popover>

            {/* Logout Section */}
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
                      You will be signed out of your account. Any unsaved
                      changes will be lost. Do you want to proceed with logging
                      out?
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
        </div>
        <div className="px-6 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
