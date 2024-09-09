"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { BackgroundGradient } from "./ui/background-gradient";

const projects = [
  {
    title: "InstantShop",
    description: "What is Lorem Ipsum?",
    ctaText: "Learn More",
    ctaLink: "https://example.com/project3",
    src: "/testimg.png", // Replace with actual image path
    content: () => (
      <p>
        Detailed information about Project 3 goes here. Detailed information
        about Project 3 goes here. Detailed information about Project 3 goes
        here. Detailed information about Project 3 goes here.
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        Detailed information about Project 3 goes here. Detailed information
        about Project 3 goes here. Detailed information about Project 3 goes
        here. Detailed information about Project 3 goes here.
      </p>
    ),
  },
  {
    title: "Adaptive Traffic Light System | AI/ML",
    description:
      "Created an adaptive traffic light system for a single-lane bridge, using YOLOv8 for real-time object detection and Roboflow for dataset management, ensuring smooth and safe traffic flow by reducing wait times by 50%.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/project1",
    src: "/testimg2.jpg", // Replace with actual image path
    content: () => (
      <p>
        This project showcases the integration of AI and machine learning in
        traffic management. Key features include: • Real-time vehicle detection
        using YOLOv8 • Efficient dataset management with Roboflow • Adaptive
        traffic light timing algorithm • Significant reduction in wait times
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
      </p>
    ),
  },
  {
    title: "TrustShare | Blockchain Based File Sharing System",
    description:
      "Developed a secure file sharing system using blockchain technology with IPFS, leveraging Solidity for creating smart contracts, Truffle for development and testing, and MetaMask for user authentication, enhancing data security and reliability.",
    ctaText: "Learn More",
    ctaLink: "https://example.com/project2",
    src: "/path/to/project2-image.jpg", // Replace with actual image path
    content: () => (
      <p>
        TrustShare revolutionizes file sharing with blockchain technology: •
        Decentralized storage using IPFS • Smart contracts implemented in
        Solidity • Robust development and testing with Truffle • Secure user
        authentication via MetaMask • Enhanced data integrity and access control
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
        <br />.<br />.<br />.<br />.<br />
      </p>
    ),
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="pt-10">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        My projects
      </h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-[90vh] bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-xl flex flex-col"
            >
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={500}
                    height={300}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-[40vh] sm:rounded-t-3xl object-cover object-top"
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-800 dark:text-neutral-100 text-2xl"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-300 text-base mt-2"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="mt-6">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-700 dark:text-neutral-300 text-sm lg:text-base"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 rounded-full p-2 backdrop-blur-sm transition-colors hover:bg-white/100 dark:hover:bg-black/100"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6%] p-16">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            className="cursor-pointer"
          >
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <motion.div layoutId={`image-${project.title}-${id}`}>
                <Image
                  width={500}
                  height={300}
                  src={project.src}
                  alt={project.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <motion.h3
                layoutId={`title-${project.title}-${id}`}
                className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"
              >
                {project.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${project.description}-${id}`}
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                {project.description}
              </motion.p>
              <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>{project.ctaText}</span>
              </button>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
