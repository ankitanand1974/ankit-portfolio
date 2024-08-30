"use client";
import { useState, useEffect, useRef } from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { Timeline } from "@/components/ui/timeline";

const TimelineSection = () => {
  const experience = [
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
          <ul className="text-neutral-800 dark:text-neutral-200 leading-8 font-normal mb-8 list-disc text-justify text-base lg:text-lg lg:leading-9">
            <li>
              Developed a learner tracking application with React, integrating
              data visualization for engagement monitoring, resulting in
              improved user engagement metrics.
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
              well-optimized and structured code reducing debugging time by 60%.
            </li>
          </ul>

          <div className="text-lg">
            <h>Technologies used : </h>
            <div className="grid grid-cols-3 lg:grid-cols-5 text-[80%] md:text-[100%] gap-[2%] gap-y-4 py-4">
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                ReactJS
              </p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                NodeJS
              </p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                GoLang
              </p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                Redis
              </p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                Docker
              </p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                ScyllaDB
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-mono text-4xl m-4 py-4 md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg text-justify m-4">
          My journey as a developer has been shaped by a passion for technology
          and a commitment to learning. From my academic foundations to
          real-world experiences, each step has refined my skills and deepened
          my understanding of building impactful solutions.
        </p>
        <h3 className="pt-[10%] text-4xl text-center">Experience</h3>
      </div>
      <Timeline data={experience} />
    </div>
  );
};

export default TimelineSection;
