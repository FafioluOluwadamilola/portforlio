import { Dot } from "lucide-react"

const ProjectCards = ({ project }) => {
  return (
    <div>
      <div className=" flex justify-center max-w-6xl mx-auto p-4">

        <div className="relative">
          
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.name}
              className="w-250 h-150 object-cover rounded-2xl blur-[0px] hover:blur-[2px] transition-all duration-300"
            />
          </a>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>

          <div className="jetbrains-font absolute top-0 left-0 flex gap-2 items-center p-4 text-white text-sm tracking-wider">
            <p className="">{project.type}</p>
            <Dot className="font-bold size-10" />
            <p className="">{project.year}</p>
          </div>

          <div className="absolute bottom-20 left-0 bg-opacity-90 p-4 rounded-lg text-white">

              <h2 className="text-6xl font-bold">{project.name}</h2>
              <p className=" mt-2 text-lg max-w-md">{project.description}</p>

              <div className="mt-3 flex gap-2">
                {project.technologies.map((technology) => (
                <span className="px-2 py-2 bg-white/25 text-white rounded-full text-sm jetbrains-font">
                  {technology}
                </span>
                ))}
              </div>

          </div>

        </div>



      </div>
    </div>
  )
}

export default ProjectCards