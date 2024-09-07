"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Navbar() {
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
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};

export default Navbar;




// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import useDarkMode from '../hooks/useDarkMode';
// import { SunIcon, MoonIcon, CloseIcon, MenuIcon } from '../components/Icons';

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Full Navbar */}
//       <nav className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 z-40 ${isScrolled ? 'md:opacity-0 md:-translate-y-full' : 'opacity-100'}`}>
//         <div className="container mx-auto px-6 py-3">
//           <div className="flex justify-between items-center">
//             <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">Ankit Anand</Link>
//             <div className="flex items-center space-x-4">
//               <div className="hidden md:flex space-x-4">
//                 <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</Link>
//                 <Link href="/#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</Link>
//                 <Link href="/#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</Link>
//                 <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link>
//               </div>
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               >
//                 {darkMode ? <SunIcon /> : <MoonIcon />}
//               </button>
//               <button 
//                 onClick={toggleMenu} 
//                 className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
//                 aria-label="toggle menu"
//               >
//                 {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Floating Hamburger Menu (only visible on larger screens when scrolled) */}
//       <div className={`fixed top-4 right-4 z-50 transition-all duration-300 md:block hidden ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
//         <button 
//           onClick={toggleMenu} 
//           className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
//           aria-label="toggle menu"
//         >
//           {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
//           <div className="flex flex-col items-center justify-center h-full space-y-8">
//             <Link href="/#about" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>About</Link>
//             <Link href="/#skills" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Skills</Link>
//             <Link href="/#projects" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Projects</Link>
//             <Link href="/#contact" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Contact</Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
