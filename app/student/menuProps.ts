import { IMenuSideBar } from "@/components/sidebar/sidebar";

export const sidebarTitle: string = "Student Portal";

export const menuProps:IMenuSideBar[] = [
  {
    label: "Dashboard",
    path: "/student/",
  },
  {
    label: "My Request",
    path: "/student/myRequest",
  },
  {
    label: "Books",
    path: "/student/books",
  },
  {
    label: "My Favorites",
    path: "/student/myFavorites",
  }
];
