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
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">ReactJS</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">NodeJS</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">GoLang</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">Redis</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">Docker</p>
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">ScyllaDB</p>
            </div>
          </div>
        </div>
      ),
    },
  
  ];

  return (
    <div className="w-full">
    <h>Experience</h>
      <Timeline data={data} />
    </div>
  );
};

export default TimelineSection;
