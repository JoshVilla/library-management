import { IMenuSideBar } from "@/components/sidebar/sidebar";
import { HomeIcon, BookOpenIcon, MessageSquare, User } from "lucide-react";
export const sidebarTitle: string = "Library Management System";


export const menuProps: IMenuSideBar[] = [
  {
    label: "Home",
    path: "/admin/",
    icon: <HomeIcon className="w-5 h-5" />
  },
  {
    label: "Announcements",
    path: "/admin/announcements",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    label: "Students",
    path: "/admin/students",
    icon: <User className="w-5 h-5" />
  },
  {
    label: "Books",
    path: "/admin/books",
    icon: <BookOpenIcon className="w-5 h-5" />
  },
  {
    label: "Borrowed Books",
    path: "/admin/borrowedBooks",
    icon: <BookOpenIcon className="w-5 h-5" />
  },
];
