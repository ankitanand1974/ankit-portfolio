'use client'
import Link from 'next/link'
import useDarkMode from '../hooks/useDarkMode'

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
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
          </div>
        </div>
      </div>
    </nav>
  )
}