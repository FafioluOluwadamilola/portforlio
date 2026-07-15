import { motion } from "motion/react"


const Background = () => {

    const blobTransition = {
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
    }

    return (
        <div
            className=
            "min-h-screen border border-t-amber-900 w-full bg-gradient-to-b from-white to-purple-200 absolute  z-[-1] overflow-hidden"
        >

            <motion.div
                className="blob-1"
                animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    scale: [1, 1.04, 1],
                }}
                transition={{ 
                    duration: 8,
                    ...blobTransition
                }}
            />

            <motion.div 
                className="blob-2"
                animate={{
                    x: [0, -15, 0],
                    y: [0, 25, 0],
                    scale: [1, 0.98, 1],
                }}
                transition={{ 
                    duration: 7,
                    ...blobTransition
                }}
            />

            <motion.div 
                className="blob-3"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.02, 1],
                }}
                transition={{ 
                    duration: 8,
                    ...blobTransition
                }}
            />


        </div>
    )
}

export default Background