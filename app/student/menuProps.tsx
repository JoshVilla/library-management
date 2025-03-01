import { IMenuSideBar } from "@/components/sidebar/sidebar";
import { HomeIcon, BookOpenIcon, HeartIcon, MessageSquare } from "lucide-react";
export const sidebarTitle: string = "Student Portal";

export const menuProps: IMenuSideBar[] = [
  {
    label: "Dashboard",
    path: "/student/",
    icon: <HomeIcon className="w-5 h-5" />
  },
  {
    label: "My Request", 
    path: "/student/myRequest",
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    label: "Books",
    path: "/student/books",
    icon: <BookOpenIcon className="w-5 h-5" />
  },
  {
    label: "My Favorites",
    path: "/student/myFavorites",
    icon: <HeartIcon className="w-5 h-5" />
  }
];
