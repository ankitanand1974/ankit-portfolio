"use client";
import { useState, useEffect, useRef } from "react";
import { TracingBeam } from "./ui/tracing-beam";

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const containerRef = useRef(null);
 

  const data = {
    experience: [
      {
        title: "Software Engineer",
        company: "Acme Inc.",
        date: "2021 - Present",
        description:
          "Developed and maintained web applications using Next.js and Tailwind CSS.",
      },
      {
        title: "Intern",
        company: "Globex Corp.",
        date: "2020 - 2021",
        description:
          "Assisted with the implementation of new features and bug fixes.",
      },
    ],
    education: [
      {
        title: "Bachelor of Science in Computer Science",
        institution: "University of Somewhere",
        date: "2016 - 2020",
        description: "Graduated with honors.",
      },
      {
        title: "High School Diploma",
        institution: "Somewhere High School",
        date: "2012 - 2016",
        description: "Valedictorian of the class.",
      },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">
          Experience and Education
        </h2>

        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mr-4 rounded-lg ${
              activeTab === "experience"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => handleTabChange("experience")}
          >
            Experience
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === "education"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </button>
        </div>
        <TracingBeam>
          <div className="relative" ref={containerRef}>
            {data[activeTab].map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-1/2 px-6 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.company || item.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
               
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default TimelineSection;
