import { IMenuSideBar } from "@/components/sidebar/sidebar";

export const sidebarTitle = "Student Portal";

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
];
