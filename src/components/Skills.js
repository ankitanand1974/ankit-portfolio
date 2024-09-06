"use client";
import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "GoLang", "Python", "SQL", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "ScyllaDB", "Redis", "Firebase", "MongoDB", "Mongoose"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Django", "ExpressJS", "Bootstrap", "Tailwind"]
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "AWS", "Docker", "Swagger", "Postman", "Unix Tools", "Linux", "System Administration"]
  },
  {
    category: "Concepts & Methodologies",
    skills: ["Data Structures", "Algorithms", "OOPs"]
  }
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
  </button>
);

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="!m-0"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 dark:bg-white transition-all duration-300" />
    ),
    dotsClass: "slick-dots slick-thumb", 
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">My Skills</h2>
        <Slider {...settings}>
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6">
              <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center w-28 sm:w-32 md:w-36 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="w-16 h-16 mb-4 p-3 bg-blue-100 dark:bg-white rounded-full flex items-center justify-center">
                      <img
                        src={`/icons/${skill.toLowerCase().replace(/\s+/g, '-')}.svg`}
                        alt={skill}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-center dark:text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
