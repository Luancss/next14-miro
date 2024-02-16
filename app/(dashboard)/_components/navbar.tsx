"use client";

import { UserButton } from "@clerk/nextjs";
import { SeatchInput } from "./search-input";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-">
      <div className="hidden lg:flex lg:flex-1">
        <SeatchInput/>
        </div>
      <UserButton />
    </div>
  );
};
