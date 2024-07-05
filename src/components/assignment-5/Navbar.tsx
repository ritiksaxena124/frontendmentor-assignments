"use client";

import Logo from "@/assets/assignment-5/logo.svg";
import HamburgerMenu from "@/assets/assignment-5/icon-menu.svg";
import HamburgerMenuClose from "@/assets/assignment-5/icon-menu-close.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav className="flex justify-between items-center py-8">
        {/* Logo */}
        <div>
          <img src={Logo?.src} alt="" />
        </div>
        {/* navitems */}
        <div>
          {!isOpen ? (
            <div className="cursor-pointer block lg:hidden" onClick={toggleSidebar}>
              <img src={HamburgerMenu?.src} alt="hamburger menu" width={48} />
            </div>
          ) : (
            <div className="fixed top-0 right-0 z-[100] w-full min-h-screen bg-zinc-600/75">
              <div className=" bg-white h-screen w-3/4 sm:w-3/5 px-8 py-12 ml-auto space-y-16">
                <div className="flex justify-end " onClick={toggleSidebar}>
                  <img src={HamburgerMenuClose?.src} alt="" />
                </div>
                <div>
                  <ul className="flex flex-col gap-4 text-xl">
                    <li className="px-4 py-3">Home</li>
                    <li className="px-4 py-3">New</li>
                    <li className="px-4 py-3">Popular</li>
                    <li className="px-4 py-3">Trending</li>
                    <li className="px-4 py-3">Categories</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <ul className=" items-center gap-5 hidden lg:flex">
            <li className="px-6 py-3 cursor-pointer hover:text-[#F15D52] text-lg font-medium text-zinc-500">
              Home
            </li>
            <li className="px-6 py-3 cursor-pointer hover:text-[#F15D52] text-lg font-medium text-zinc-500">
              New
            </li>
            <li className="px-6 py-3 cursor-pointer hover:text-[#F15D52] text-lg font-medium text-zinc-500">
              Popular
            </li>
            <li className="px-6 py-3 cursor-pointer hover:text-[#F15D52] text-lg font-medium text-zinc-500">
              Trending
            </li>
            <li className="px-6 py-3 cursor-pointer hover:text-[#F15D52] text-lg font-medium text-zinc-500">
              Categories
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
