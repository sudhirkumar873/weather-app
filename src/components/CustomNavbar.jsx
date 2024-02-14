"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  // const context = useContext(UserContext);
  const router = useRouter();

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="bg-blue-600 h-16 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Weather Application</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <>
            <li>
              <Link href={"/"} className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add-location" className="hover:text-blue-200">
                Add Location
              </Link>
            </li>
          </>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
