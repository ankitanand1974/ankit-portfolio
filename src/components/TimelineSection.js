"use client";
import { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const TimelineSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  const experience = [
    {
      title: (
        <div>
          <h1>Impelsys</h1>
          <p className="py-2 text-lg">
            Software Developer Intern
            <br />
            Mangalore, Karnataka (on-site)
            <br />
            Feb 2024 - May 2024
          </p>
        </div>
      ),
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 leading-8 font-normal mb-8 list-disc text-justify text-base lg:text-lg lg:leading-9">
            <li>
              Developed a learner tracking application with React,
              integrating&nbsp;
              <RoughNotation type="underline" show={show} iterations={3}>
                data visualization
              </RoughNotation>
              &nbsp;for engagement monitoring, resulting in improved user
              engagement metrics.
            </li>
            <li>
              Built backend services with Golang, implemented RESTful APIs,
              utilizing ScyllaDB and Redis for &nbsp;
              <RoughNotation type="underline" show={show} iterations={2}>
                caching
              </RoughNotation>
              &nbsp; and optimized performance, resulting in a 40% reduction in
              data retrieval and processing times.
            </li>
            <li>
              &nbsp;
              <RoughNotation type="underline" show={show} iterations={3}>
                Utilized pagination and Chart.js
              </RoughNotation>
              &nbsp; to generate dynamic charts for tracking metrics.
            </li>
            <li>
              Implemented &nbsp;
              <RoughNotation type="underline" show={show} iterations={2}>
                CSV data import and PDF export features.
              </RoughNotation>
              &nbsp;The design handled large download requests efficiently.
            </li>
          </ul>

          <div className="text-lg">
            <h>Technologies used : </h>
            <div className="grid grid-cols-3 lg:grid-cols-5 text-[80%] md:text-[90%] gap-[2%] gap-y-4 py-4">
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

  const education = [
    {
      title: (
        <div>
          <h1>B.Tech in CSE</h1>
          <p className="py-2 text-lg">
            Ernakulam, Kerala <br />
            2020 - 2024
          </p>
        </div>
      ),
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 leading-8 font-semibold mb-8 text-justify text-xl lg:text-4xl lg:leading-9">
            Cochin University of Science and Technology (CUSAT)
          </h1>
          <p className="text-justify p-4">
            During my B.Tech, I developed a strong foundation in computer
            science principles, including algorithms, data structures, and
            object oriented programming. My academic journey allowed me to hone
            problem-solving skills and cultivate a deep interest in full-stack
            development, which continues to drive my passion for technology
            today.
          </p>

          <div className="text-lg">
            <div className="grid grid-cols-3 lg:grid-cols-5 text-[80%] md:text-[100%] gap-[2%] gap-y-4 py-4">
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                7.89 CGPA
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: (
        <div>
          <h1>Intermediate (CBSE)</h1>
          <p className="py-2 text-lg">
            Patna, Bihar <br />
            2018 - 2020
          </p>
        </div>
      ),
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 leading-8 font-semibold mb-8 text-justify text-xl lg:text-4xl lg:leading-9">
            St. Michael's High School, Digha Ghat
          </h1>
          <p className="text-justify p-4">
            <p2 className="text-xl font-semibold">
              Major Subjects: <br />
              Physics, Chemistry, Mathematics, Informatics Practices, English
              <br />
              <br />
            </p2>
            I completed my 12th from the best CBSE school in Bihar, where I had
            the opportunity to build a strong foundation in both science and
            technology. The combination of rigorous academics in subjects like
            Physics, Chemistry, and Mathematics, along with Informatics
            Practices, ignited my passion for programming and set me on the path
            to pursuing computer science.
          </p>

          <div className="text-lg">
            <div className="grid grid-cols-3 lg:grid-cols-5 text-[80%] md:text-[100%] gap-[2%] gap-y-4 py-4">
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                Grade: 80%
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: (
        <div>
          <h1>Matriculation (ICSE)</h1>
          <p className="py-2 text-lg">
            Patna, Bihar <br />
            2008 - 2018
          </p>
        </div>
      ),
      content: (
        <div>
          <h1 className="text-neutral-800 dark:text-neutral-200 leading-8 font-semibold mb-8 text-justify text-xl lg:text-4xl lg:leading-9">
            Don Bosco Academy, Digha Ghat
          </h1>
          <p>
            I pursued Science with Computer in 10th grade, maintaining a
            balanced approach to both academics and extracurricular activities.
          </p>

          <div className="text-lg">
            <div className="grid grid-cols-3 lg:grid-cols-5 text-[80%] md:text-[100%] gap-[2%] gap-y-4 py-4">
              <p className="shadow-[inset_0_0_0_2px_#616467] text-center text-black px-2 py-1 rounded-full tracking-widest font-bold bg-transparent dark:text-neutral-200 transition duration-200">
                Grade: 91%
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-black w-full">
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

      <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-10">
        <h3 className="text-4xl text-center">Education</h3>
      </div>
      <Timeline data={education} />
    </div>
  );
};

export default TimelineSection;
