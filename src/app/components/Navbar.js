'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import useDarkMode from '../hooks/useDarkMode';

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Full Navbar */}
      <nav className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 z-40 ${isScrolled ? 'md:opacity-0 md:-translate-y-full' : 'opacity-100'}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">Your Name</Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-4">
                <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</Link>
                <Link href="/#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</Link>
                <Link href="/#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</Link>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {darkMode ? (
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                )}
              </button>
              <button 
                onClick={toggleMenu} 
                className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
                aria-label="toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Hamburger Menu (only visible on larger screens when scrolled) */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 md:block hidden ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
          aria-label="toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/#about" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>About</Link>
            <Link href="/#skills" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Skills</Link>
            <Link href="/#projects" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Projects</Link>
            <Link href="/#contact" className="text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
