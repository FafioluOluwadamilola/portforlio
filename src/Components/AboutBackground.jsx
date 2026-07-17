import { motion } from "motion/react"

const AboutBackground = () => {
  return (
      <div className="min-h-screen overflow-hidden w-full bg-[#ffffff] z-[-1] absolute">
        <motion.div 
            className="about-blob1 rounded-full absolute"
            animate={{
                scale: [1, 1.25, 1, 0.88, 1.1, 1],
                x: [0, 55, -40, 25, 0],
                y: [0, -60, 70, 20, 0]
            }}
            transition={{
                duration: 20,
                delay: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }}

        />

    </div>
  )
}

export default AboutBackground