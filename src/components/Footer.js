"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Ankit Anand</h2>
              <p className="mt-2 text-gray-400 max-w-xs">
                Passionate Full Stack Developer turning ideas into digital
                realities.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/ankitanand1974"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankitanand1974/"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ankitanand1974@gmail.com"
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Ankit Anand. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
