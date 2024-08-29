"use client";
import { useState, useEffect, useRef } from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { Timeline } from "@/components/ui/timeline";

const TimelineSection = () => {
  const data = [
    {
      title: (
        <div>
          <h1>Impelsys</h1>
          <p className="py-2 text-lg">
            Software Developer Intern <br />
            Feb 2024 - May 2024
          </p>
        </div>
      ),
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 list-disc text-justify text-base">
            <li>
              Developed a learner tracking application with React, integrating
              data visualization for engagement monitoring, resulting in
              improved user engagement metrics.{" "}
            </li>
            <li>
              Built backend services with Golang, implemented RESTful APIs,
              utilizing ScyllaDB and Redis for caching and optimized
              performance, resulting in a 40% reduction in data retrieval and
              processing times.
            </li>
            <li>
              Implemented CSV data import and PDF export features. The design
              handled large download requests efficiently, improving reporting
              efficiency by 35% and usability ratings by 20%.
            </li>
            <li>
              Documented the application with Swagger, and ensured
              well-optimized and structured code reducing debugging time by 60%
            </li>
          </ul>
          
          <div className="gap-4 text-lg">
            <h>Technologies used</h>
            <div className="grid p-1">
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">ReactJS</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">NodeJS</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">GoLang</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">Redis</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">Docker</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">ScyllaDB</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more examples of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineSection;
