export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-blue-700 dark:to-purple-800">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-2xl mb-8">Full Stack Web Developer</p>
        <a href="#contact" className="bg-white text-blue-500 dark:bg-gray-800 dark:text-blue-300 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300">
          Get in Touch
        </a>
      </div>
    </div>
  )
}