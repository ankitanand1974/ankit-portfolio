"use client";
import { useState, useEffect, useRef } from "react";

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        <div className="relative" ref={containerRef}>
          <div className="absolute top-0 left-1/2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
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
                <p className="text-gray-500 dark:text-gray-400">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? "ml-4" : "-ml-4"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-blue-500 rounded-full ${
                    containerRef.current &&
                    scrollPosition >= containerRef.current.offsetTop &&
                    scrollPosition <=
                      containerRef.current.offsetTop +
                        containerRef.current.offsetHeight
                      ? "animate-bounce"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
