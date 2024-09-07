import React from "react";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
  const words = ["Full Stack Web Developer", "Software Engineer"];

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-20 py-12 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div className="mb-8 lg:mb-0 lg:mr-12 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
              Ankit Anand
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl mb-6 text-center lg:text-left">
              <FlipWords words={words} />
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300 dark:bg-blue-700 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img
                src="/profilepic.png"
                alt="Ankit Anand"
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
