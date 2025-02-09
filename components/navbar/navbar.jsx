"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul>
        {/* <Link
          href="/"
          className={`${pathname === "/" ? "text-blue-800" : null}`}
        >
          Home
        </Link>
        <Link
          href="/product"
          className={`${pathname === "/product" ? "text-blue-800" : null}`}
        >
          Products
        </Link> */}
      </ul>
    </div>
  );
};

export default Navbar;
