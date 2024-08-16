import { FlipWords } from "./ui/flip-words";
export default function Hero() {
  const words = ["Full Stack Web Developer", "Software Developer"];
  return (
    <div className="bg-gradient-to-t from-blue-500 to-purple-600 text-white dark:from-black dark:to-indigo-900">
      <div className="container mx-auto px-6 py-24 text-center flex justify-evenly ">
        <img src="/profilepic.png" alt="." className="rounded-full w-80 h-80" />

        <div className="flex-col justify-center py-20">
          <h1 className="text-5xl font-bold mb-5">Ankit Anand</h1>
          <div className="text-2xl mb-9">
            <FlipWords words={words} /> <br />
          </div>
          <a
            href="#contact"
            className="bg-white text-blue-500 dark:bg-gray-800 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
