import { projectData } from "../Data/Projects"

const ProjectCards = () => {
  return (
    <div>
      <div>

      {
        projectData.map((project, index) => (

          <div key={index} className= "project-card">

            <h2>{project.name}</h2>
            <p>{project.type}</p>
            <p>{project.description}</p>

            <p>{project.technologies.map((technology) => 
              <span key={index} className="mr-2">
                {technology}
              </span>
            )} </p>

            <p>{project.link}</p>
            <p>{project.year}</p>
            
            <img 
              src={project.image} 
              alt={project.name} 
              className="project-image">
            </img>

          </div>
        ))
      }

      </div>
    </div>
  )
}

export default ProjectCards