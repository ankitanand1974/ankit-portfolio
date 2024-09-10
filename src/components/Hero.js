import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-12 lg:space-y-0 lg:space-x-8">
          {/* Name and Photo Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Ankit Anand
            </h1>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Full Stack Web Developer
              </h2>
            </div>
            <div className="relative mb-8 p-10">
              <div className="absolute inset-0 rounded-full"></div>
              <img
                src="/profilepic.png"
                alt="Ankit Anand"
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
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
                Hey there! I'm Ankit, a Full Stack Web Developer who loves
                turning ideas into user-friendly, efficient, and fun digital
                experiences.
                <br />
                <br />
                When I'm not buried in code, you'll probably find me diving into
                new programming languages or figuring out how to break—and then
                fix—things.
                <br />
                <br />I love connecting with people from all walks of life, and
                I'm always curious about the world around me. Whether it's
                exploring new cultures or collaborating with diverse teams, I'm
                all in.
                <br />
                <br />
                Currently looking for my next big adventure in development—got
                one in mind? Let's chat!
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
