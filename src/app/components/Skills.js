const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML/CSS', 'Git'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
              <p className="text-lg font-medium dark:text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}