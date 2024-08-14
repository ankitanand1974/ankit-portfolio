"use client";
import React, { useEffect, useState, useRef } from "react";

const skills = [
  { name: "JavaScript", icon: "icons/javascript.svg", level: 90 },
  { name: "React", icon: "icons/react.svg", level: 85 },
  { name: "Node.js", icon: "icons/node.svg", level: 80 },
  { name: "Express", icon: "/icons/express.png", level: 75 },
  { name: "MongoDB", icon: "icons/mongodb.svg", level: 70 },
  { name: "SQL", icon: "icons/sql.svg", level: 65 },
  { name: "HTML/CSS", icon: "/icons/html-css.png", level: 95 },
  { name: "Git", icon: "/icons/git.png", level: 85 },
];


export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-4"
              />
              <p className="text-lg font-medium dark:text-white">
                {skill.name}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-600 mt-4">
                <div
                  className={`bg-yellow-600 h-1 rounded-full dark:bg-yellow-400 transition-width duration-2000 ease-in-out`}
                  style={{ width: animate ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
              <p className="text-sm dark:text-gray-300 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}