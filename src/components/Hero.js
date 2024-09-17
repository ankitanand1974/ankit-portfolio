"use client";
import { useState, useEffect } from "react";
import { FlipWords } from "./ui/flip-words";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  const words = ["Full Stack Web Developer", "Software Engineer"];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-12 lg:space-y-0 lg:space-x-8">
          {/* Name and Photo Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Ankit Anand
            </h1>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                <FlipWords words={words} /> <br />
              </h2>
            </div>
            <div className="relative mb-8 p-10">
              <img
                src="/profilepic.png"
                alt="Ankit Anand"
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-700 shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* About Me Section */}
          <div className="w-full lg:w-1/2 order-2 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left pb-6">
              About Me
            </h2>
            <div className="text-justify">
              <p className="text-lg mb-4 pb-6">
                Hey there! I'm Ankit,&nbsp;
                <RoughNotationGroup show={show}>
                  <RoughNotation
                    type="box"
                    show={show}
                    animationDuration={4000}
                  >
                    a Full Stack Web Developer
                  </RoughNotation>
                  &nbsp;who loves turning ideas into user-friendly, efficient,
                  and fun digital experiences.
                  <br />
                  <br />
                  When I'm not buried in code, you'll probably find me diving
                  into new programming languages or figuring out how to&nbsp;
                  <RoughNotation
                    type="strike-through"
                    show={show}
                    iterations={1}
                    padding={8}
                  >
                    break
                  </RoughNotation>
                  &nbsp;and then fix—things. I thrive on&nbsp;
                  <RoughNotation
                    type="circle"
                    show={show}
                    color="orange"
                    padding={7}
                  >
                    solving
                  </RoughNotation>
                  &nbsp;tricky problems and, honestly, there's no bug too big
                  that a bit of determination can't handle.
                  <br />
                  <br />I love connecting with people from all walks of life,
                  and I'm always&nbsp;
                  <RoughNotation
                    type="circle"
                    show={show}
                    color="orange"
                    padding={7}
                  >
                    curious
                  </RoughNotation>
                  &nbsp;about the world around me. Whether it's exploring new
                  cultures or collaborating with diverse teams, I'm all in.
                  <br />
                  <br />
                  Currently looking for my next big &nbsp;
                  <RoughNotation
                    type="underline"
                    show={show}
                    color="green"
                    iterations={5}
                  >
                    adventure in development
                  </RoughNotation>
                </RoughNotationGroup>
                &nbsp;—got one in mind? Let's chat!
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;