"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const Tabs = ({ navItems }) => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <Link href={href} passHref legacyBehavior>
              <NavigationMenuLink
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  pathname === href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Tabs;
