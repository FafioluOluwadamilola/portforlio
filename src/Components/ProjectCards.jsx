
const ProjectCards = ({ project }) => {
  return (
    <div>
        <div>
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>

        </div>
    </div>
  )
}

export default ProjectCards