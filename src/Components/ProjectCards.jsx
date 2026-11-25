import { motion ,useTransform } from "motion/react"
import { projectData } from "../Data/Projects"

const ProjectCard = ({ project, index, scrollYProgress }) => {

  const cardStart =  index / projectData.length;  // Calculate the start position of the card based on its index
  const cardEnd = (index + 1) / projectData.length;  // Calculate the end position of the card based on its index

  const cardX = index * 200;  // Each card is 200px wide, so we multiply the index by 200 to get the left position
  const cardY = index * 100;  // Each card is 100px tall, so we multiply the index by 100 to get the top position

  const centerX = 176;
  const centerY = 200;

  const moveX = centerX - cardX;
  const moveY = centerY - cardY;

  const cardXPosition = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, moveX]
  )

  const cardYPosition = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    [0, moveY]
  )

  return (
    <motion.div
      className="absolute project-card w-200 h-125 "
      style={{ 
        left: `${cardX}px`, 
        top: `${cardY}px`,
        x: cardXPosition,
        y: cardYPosition
      }}>

      <div className="relative h-full w-full text-white">

        <img
          src={project.image}
          alt={project.name}
          className="project-image w-full h-full object-cover"
        >
        </img>

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent"></div>

        <div className="project-info absolute inset-0 flex flex-col justify-between p-10 ">

          <div
            className="flex gap-2 jetbrains-font text-xs tracking-widest text-white/60">
            <p>{project.type}</p>
            <p>•</p>
            <p>{project.year}</p>
          </div>

          <div>

            <h2
              className="heading-font text-[60px]"
            >{project.name}
            </h2>

            <p className="main-font text-[16px] text-white/60 max-w-lg line-clamp-3 mb-4">{project.description}</p>

            <div className="flex gap-2">
              {project.technologies.map((technology, techIndex) => (
                <span
                  key={techIndex}
                  className="jetbrains-font font-medium text-sm text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {technology}
                </span>
              ))}


            </div>

          </div>

        </div>

      </div>

    </motion.div>
  )
}


const ProjectCards = ({ scrollYProgress }) => {


  return (
    <div>
      <div>
        {
          projectData.map((project, index) => {

            return (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            )

          })
        }

      </div>
    </div>
  )
}

export default ProjectCards