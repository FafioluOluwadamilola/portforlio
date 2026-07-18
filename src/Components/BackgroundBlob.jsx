import { motion } from "motion/react"

const BackgroundBlob = ({color, style, delay}) => {

    const defaultStyle = {
        width: "500px",
        height: "500px",
        borderRadius: "9999px 9999px 9999px 9999px",
        opacity: 0.18
    }

    const blobStyle = {
        ...defaultStyle,
        ...style,
        position: "absolute",
        backgroundColor: color,
        filter: "blur(80px)"
    };

    const blobAnimation = {
        scale: [1, 1.25, 1, 0.88, 1.1, 1],
        x: [0, 55, -40, 25, 0],
        y: [0, -60, 70, 20, 0],
    };
    
    const blobTransition = {
        duration: 20,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
    }

    return (
        <motion.div
            animate={blobAnimation}
            transition={blobTransition}
            style={blobStyle}
        />

    )
}


export default BackgroundBlob