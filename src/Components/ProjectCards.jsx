import { ArrowUpRight, Dot } from "lucide-react"
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion"

const ProjectCards = ({ project, scrollYProgress, projectIndex, projectLength }) => {

  const mouseX = useMotionValue(0); 
  const mouseY = useMotionValue(0); 

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const cardPortion = projectIndex / projectLength;

  const cardSpace = 1 / projectLength;

  const cardEnd = cardPortion + cardSpace;

  const scrollYProgressTest = useTransform(
    scrollYProgress,
    [cardPortion, cardEnd],
    [0, 300]
  )

  const scrollOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  )

  const scrollScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  )

  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])

  const springRotateY = useSpring(rotateY,{
    stiffness: 300,
    damping: 20,
  })

  const springRotateX = useSpring(rotateX, {
    stiffness: 800,
    damping: 20,
  })

  const springGlowX = useSpring(glowX, {
    stiffness: 300,
    damping: 20,
  })

  const springGlowY = useSpring(glowY, {
    stiffness: 300,
    damping: 20,
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    glowX.set((e.clientX - rect.left) / rect.width * 100);
    glowY.set((e.clientY - rect.top) / rect.height * 100);
  }

  const handleMouseLeave = () => {
    mouseX.set(0);  
    mouseY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  const glowBackground = useTransform(
    [springGlowX, springGlowY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25), transparent 40%)`
  );

  return (
    
    <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">

      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style ={{ 
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          x: 0,
          y: scrollYProgressTest,
          opacity: scrollOpacity,
          scale: scrollScale
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=" flex justify-center max-w-6xl mx-auto p-4">

        <div className="relative">

          <div className="overflow-hidden rounded-2xl">
            
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                whileHover={{scale: 1.03}}
                transition={{duration: 0.1}}
                src={project.image}
                alt={project.name}
                className="w-250 h-150 object-cover rounded-2xl blur-[0px] hover:blur-[2px] transition-all duration-300"
              />
            </a>
  
          </div>

          {/* background gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-2xl pointer-events-none"></div>

          {/* Glow Backgound */}
          <motion.div 
            style={{ background: glowBackground }} 
            className="absolute inset-0 rounded-2xl pointer-events-none"/>
            

          {/* top information */}
          <div className="w-full absolute top-0 flex justify-between items-center pointer-events-none p-10">
            <div className="jetbrains-font  flex gap-2 items-center p-4 text-white text-sm tracking-wider pointer-events-none">
              <p className="">{project.type}</p>
              <Dot className="font-bold size-10" />
              <p className="">{project.year}</p>
            </div>

            <div>
              <ArrowUpRight className=" m-4 bg-white/20 rounded-full p-2 text-white size-10 pointer-events-none" />
            </div>

          </div>

          {/* bottom information */}
          <div className="absolute bottom-20 left-0 bg-opacity-90 p-10 rounded-lg text-white pointer-events-none">

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


      </motion.div>

    </div>
  )
}

export default ProjectCards