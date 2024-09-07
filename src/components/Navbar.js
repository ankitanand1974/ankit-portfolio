"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FloatingNav } from "./ui/floating-navbar";
import useDarkMode from "../hooks/useDarkMode";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { SunIcon, MoonIcon, CloseIcon, MenuIcon } from "../components/Icons";

export function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <StaticNav darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

const StaticNav = ({ darkMode, setDarkMode }) => {
  return (
    <div className=" top-0 left-0 w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link className="text-xl font-bold text-gray-800 dark:text-white" href="/" legacyBehavior>
            
              Ankit Anand
            
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link
                href="/#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                Contact
              </Link>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
