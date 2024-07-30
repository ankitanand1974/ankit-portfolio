const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }