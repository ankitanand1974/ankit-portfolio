const projects = [
  {
    title: "Adaptive Traffic Light System | AI/ML",
    description:
      "Created an adaptive traffic light system for a single-lane bridge, using YOLOv8 for real-time object detection and Roboflow for dataset management, ensuring smooth and safe traffic flow by reducing wait times by 50%.",
  },
  { title: "TrustShare | Blockchain Based File Sharing System", description: "Developed a secure file sharing system using blockchain technology with IPFS, leveraging Solidity for creating smart contracts, Truffle for development and testing, and MetaMask for user authentication, enhancing data security and reliability." },
  { title: "Project 3", description: "Description of project 3" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
