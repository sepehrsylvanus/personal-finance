"use client";
import { navbarItems } from "@/constants/hub";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type navItem = {
  link: string;
  icon: string;
  iconGreen: string;
};
const Navbar = () => {
  const pathname = usePathname();
  console.log({ pathname });
  const currentIndex = 0;
  const renderNavItem = (pathname: string, item: navItem) => {
    switch (pathname) {
      case "/hub":
        return <Image src={item.iconGreen} alt="icon" width={24} height={24} />;
    }
  };
  return (
    <div className="bg-gray-900  rounded-t-lg w-screen flex justify-center pt-100 px-200">
      {navbarItems.map((item, index) => (
        <div
          className={`grid place-content-center pt-2 pb-3 w-16 ${
            currentIndex === index &&
            "bg-white rounded-t-lg border-b-4 border-green"
          }`}
        >
          {item.link === pathname ? (
            <Image src={item.iconGreen} alt="icon" width={24} height={24} />
          ) : (
            <Image src={item.icon} alt="icon" width={24} height={24} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
