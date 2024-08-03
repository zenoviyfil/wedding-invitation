"use client";

import { BaseNavbar } from "@/components/base-navbar";
import { NewUserMenu } from "@/components/auth/new-user-menu";
import { Navbar } from "@/app/(protected)/_components/navbar";
import { useCurrentUser } from "@/hooks/use-current-user";

export const TopNavigation = () => {
  const session = useCurrentUser();
  return (
    <div className="flex flex-row items-center justify-around w-full">
      <BaseNavbar />
      {!session ? <NewUserMenu /> : <Navbar />}
    </div>
  );
};