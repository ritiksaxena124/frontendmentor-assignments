"use client";
import HeroImgDesktop from "@/assets/assignment-9/image-hero-desktop.png";
import HeroImgMobile from "@/assets/assignment-9/image-hero-mobile.png";
import Client1 from "@/assets/assignment-9/client-databiz.svg";
import Client2 from "@/assets/assignment-9/client-audiophile.svg";
import Client3 from "@/assets/assignment-9/client-meet.svg";
import Client4 from "@/assets/assignment-9/client-maker.svg";
import Logo from "@/assets/assignment-9/logo.svg";
import DropDownIcon from "@/assets/assignment-9/icon-arrow-down.svg";
import CloseHamburgerBtn from "@/assets/assignment-9/icon-close-menu.svg";
import HamburgerBtn from "@/assets/assignment-9/icon-menu.svg";
import TodoListIcon from "@/assets/assignment-9/icon-todo.svg";
import CalendarIcon from "@/assets/assignment-9/icon-calendar.svg";
import RemindersIcon from "@/assets/assignment-9/icon-reminders.svg";
import PlanningIcon from "@/assets/assignment-9/icon-planning.svg";

import { useEffect, useRef, useState } from "react";

import DimensionCalculator from "./DimensionCalculator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {
  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16 bg-[#FAFAFA]">
        <div className="w-full">
          {/* navigation bar */}
          <Navbar />
          {/* main container */}
          <MainContainer />
        </div>
      </div>
    </>
  );
}

interface Dropdown {
  features: boolean;
  company: boolean;
}

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);
  const [showDropDown, setShowDropDown] = useState<Dropdown>({
    features: false,
    company: false,
  });

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  function handleShowDropdown(item: keyof Dropdown, val: boolean) {
    const newState: Dropdown = {
      features: false,
      company: false,
      [item]: val,
    };

    setShowDropDown(newState);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(DimensionCalculator);
    });

    return () =>
      window.removeEventListener("resize", () =>
        setDimensions(DimensionCalculator)
      );
  }, []);

  useEffect(() => {
    if (dimensions?.width > 768) {
      setHamburgerMenuOpen(false);
    }
  }, [dimensions]);

  useGSAP(() => {
    gsap.to(".sidebar", {
      duration: 0.5,
      x: hamburgerMenuOpen ? 0 : 1000,
      display: (!hamburgerMenuOpen ? "hidden" : "block"),

    });
  }, [hamburgerMenuOpen]);

  return (
    <>
      <nav className="py-6 z-10 sticky left-0 top-0 border-b  flex justify-between items-center md:gap-6 lg:gap-8 max-w-7xl mx-auto bg-[#FAFAFA]">
        <div className="h-8">
          <img
            src={Logo?.src}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex md:gap-2 lg:gap-5">
            <div
              className=""
              onMouseEnter={() => handleShowDropdown("features", true)}
              onMouseLeave={() => handleShowDropdown("features", false)}
            >
              <div className="md:px-2 lg:px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium">
                <span>Features</span>
                <span>
                  <img
                    src={DropDownIcon?.src}
                    alt=""
                    className={`w-3 ${
                      showDropDown.features ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              {showDropDown.features && (
                <div className="border w-fit absolute py-5 rounded-lg bg-white shadow-lg">
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={TodoListIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Todo List</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={CalendarIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Calendar</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={RemindersIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Reminders</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={PlanningIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Planning</span>
                  </div>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => handleShowDropdown("company", true)}
              onMouseLeave={() => handleShowDropdown("company", false)}
            >
              <div className="md:px-2 lg:px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515]">
                <span>Company</span>
                <span>
                  <img
                    src={DropDownIcon?.src}
                    alt=""
                    className={`w-3 ${
                      showDropDown.company ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              {showDropDown.company && (
                <div className="border w-fit absolute py-5 rounded-lg bg-white shadow-lg">
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">History</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">Our Team</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">Blog</span>
                  </div>
                </div>
              )}
            </div>
            <div className="md:px-2 lg:px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515]">
              <span>Careers</span>
            </div>
            <div className="md:px-2 lg:px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium">
              <span>About</span>
            </div>
          </div>
          <div className="flex md:gap-2 lg:gap-5">
            <button className="px-4 py-2 text-zinc6500 font-medium hover:text-[#151515]">
              Login
            </button>
            <button className="border-2 border-zinc-500 text-zinc-600 hover:text-[#151515] hover:border-[#151515] hover:bg-zinc-50 px-4 py-2 rounded-xl font-medium tracking-wide">
              Register
            </button>
          </div>
        </div>
        <div className="block md:hidden">
          <button className="h-5" onClick={() => setHamburgerMenuOpen(true)}>
            <img
              src={HamburgerBtn?.src}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </button>
        </div>
        <div
        onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
          className={`backdrop w-full bg-zinc-800/75 z-10 fixed top-0 right-0 h-screen ${
            hamburgerMenuOpen ? "block": "hidden" 
          }`}
        ></div>
        <div
          className={`sidebar z-20 fixed right-0 top-0 w-full max-w-xs bg-white h-full py-6 px-8 ml-auto space-y-8`}
        >
          <button
            className="h-5 block ml-auto"
            onClick={() => setHamburgerMenuOpen(false)}
          >
            <img
              src={CloseHamburgerBtn?.src}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </button>
          <div className="space-y-4">
            <div>
              <div
                onClick={() =>
                  handleShowDropdown("features", !showDropDown.features)
                }
                className="lg:px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium"
              >
                <span>Features</span>
                <span>
                  <img
                    src={DropDownIcon?.src}
                    alt=""
                    className={`w-3 ${
                      showDropDown.features ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              {showDropDown.features && (
                <div className="w-full bg-white">
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={TodoListIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Todo List</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={CalendarIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Calendar</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={RemindersIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Reminders</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <img src={PlanningIcon?.src} alt="" width={18} />
                    <span className="text-sm text-zinc-600">Planning</span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() =>
                  handleShowDropdown("company", !showDropDown.company)
                }
                className="md:px-2 lg:px-4 py-2 flex items-center gap-2 cursor-pointer text-zinc-600 hover:text-[#151515]"
              >
                <span>Company</span>
                <span>
                  <img
                    src={DropDownIcon?.src}
                    alt=""
                    className={`w-3 ${
                      showDropDown.company ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              {showDropDown.company && (
                <div className="w-full rounded-lg bg-white">
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">History</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">Our Team</span>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer  px-6 hover:bg-zinc-100 py-2">
                    <span className="text-sm text-zinc-600">Blog</span>
                  </div>
                </div>
              )}
            </div>
            <div className="md:px-2 lg:px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515]">
              <span>Careers</span>
            </div>
            <div className="md:px-2 lg:px-4 py-2 cursor-pointer text-zinc-600 hover:text-[#151515] font-medium">
              <span>About</span>
            </div>
          </div>
          <div className="space-y-4">
            <button className="px-4 py-2 block mx-auto text-zinc6500 font-medium hover:text-[#151515]">
              Login
            </button>
            <button className="border-2 w-full block mx-auto border-zinc-500 text-zinc-600 hover:text-[#151515] hover:border-[#151515] hover:bg-zinc-50 px-4 py-2 rounded-xl font-medium tracking-wide">
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const MainContainer = () => {
  useGSAP(() => {
    gsap.from(".heading, .short-desc, .btn", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });

    gsap.from(".main-image", {
      scale: 2,
      duration: 1,
      opacity: 0,
    });

    gsap.from(".client-logos", {
      opacity: 0,
      duration: 2,
    });
  });
  return (
    <>
      <main className="w-full max-w-7xl mx-auto py-20 flex flex-col-reverse gap-16 md:gap-0 md:flex-row">
        {/* left section */}
        <section className="w-full flex content-stretch flex-col justify-between gap-20 md:gap-16 px-0 xl:px-24">
          <div className="space-y-6 md:space-y-10 lg:space-y-16 md:py-12 lg:py-16">
            <div className="overflow-hidden">
              <h1 className="heading overfl font-bold text-[2.25rem] text-center md:text-left md:text-[3.125rem] lg:text-[4.75rem] xl:text-[6rem] leading-none text-[#151515]">
                Make remote work
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="short-desc text-center md:text-left md:text-base lg:text-xl text-zinc-500 font-medium">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals and watch productivity soar.
              </p>
            </div>
            <div className="overflow-hidden">
              <button className="btn bg-[#151515] border-2 border-[#151515] mx-auto block md:inline-block md:mr-auto hover:bg-slate-50 hover:text-[#151515] px-8 py-4 rounded-2xl text-white font-semibold tracking-wide">
                Learn more
              </button>
            </div>
          </div>
          {/* clients logo */}
          <div className="client-logos flex flex-wrap md:flex-nowrap gap-4 justify-center md:justify-between items-center w-full">
            <img
              src={Client1?.src}
              alt="client1"
              className="w-24 object-contain"
            />

            <img
              src={Client2?.src}
              alt="client2"
              className="w-24 object-contain"
            />

            <img
              src={Client3?.src}
              alt="client3"
              className="w-24 object-contain"
            />

            <img
              src={Client4?.src}
              alt="client4"
              className="w-24 object-contain"
            />
          </div>
        </section>
        {/* right section */}
        <section className="overflow-hidden">
          <div className="w-full h-full hidden md:block md:pl-16 main-image">
            <img
              src={HeroImgDesktop?.src}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full block md:hidden">
            <img
              src={HeroImgMobile?.src}
              alt="hero-image"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
      </main>
    </>
  );
};
