export const sidebarTitle: string = "Inventory System";

interface MenuProp {
  label: string;
  path: string;
}

export const menuProps: MenuProp[] = [
  {
    label: "Home",
    path: "/admin/",
  },
  {
    label: "Announcements",
    path: "/admin/announcements",
  },
  {
    label: "Students",
    path: "/admin/students",
  },
  {
    label: "Books",
    path: "/admin/books",
  },
  {
    label: "Borrowed Books",
    path: "/admin/borrowedBooks",
  },
];
