"use client";

import { BackgroundGradient } from "./ui/background-gradient";

const projects = [
  {
    title: "Adaptive Traffic Light System | AI/ML",
    description:
      "Created an adaptive traffic light system for a single-lane bridge, using YOLOv8 for real-time object detection and Roboflow for dataset management, ensuring smooth and safe traffic flow by reducing wait times by 50%.",
    link: "https://stripe.com",
  },
  {
    title: "TrustShare | Blockchain Based File Sharing System",
    description:
      "Developed a secure file sharing system using blockchain technology with IPFS, leveraging Solidity for creating smart contracts, Truffle for development and testing, and MetaMask for user authentication, enhancing data security and reliability.",
    link: "https://stripe.com",
  },

  {
    title: "Project 3",
    description: "Description of project 3",
    link: "https://stripe.com",
  },
];

export default function Projects() {
  return (
    <div className="pt-10">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        My projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[6%] p-16">
        {projects.map((project, index) => (
          <div>
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Learn More</span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      </div>
  );
}
