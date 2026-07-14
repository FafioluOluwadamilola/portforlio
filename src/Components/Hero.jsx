import { ArrowUpRight } from 'lucide-react'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <div className='max-w-5xl w-full mx-auto flex items-center justify-center h-auto gap-10 flex-col mt-25'>

            <div className='flex gap-2 items-center border border-gray-200 rounded-full px-4 py-1'>
                <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse' />
                <span className='text-[#6D5FA8] text-sm font-light tracking-widest'>AVAILABLE FOR REMOTE OPPORTUNITIES</span>
            </div>

            <div className='text-center'>

                <h1 
                    className='leading-none text-6xl sm:text-7xl md:text-8xl lg:text-[108px] tracking-tighter heading-font'>
                    Full-Stack
                    <br />

                    <span className='header-color'>
                        Developer
                    </span>

                    <span className='text-[#0F8BB5] animate-pulse'>
                        .
                    </span>

                </h1>

            </div>



            <div className='text-center mb-6'>
                <p className='header-color text-xl text-muted-foreground leading-relaxed max-w-xl tracking-wider main-font'>I build scalable systems, elegant interfaces, and open-source tools that engineers actually want to use. 6 years in production.</p>
            </div>

            <div className='flex gap-2 mb-9'>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-[#7c3aed] flex items-center rounded-full hover:opacity-90 transition-opacity text-white text-sm font-bold py-4 px-7 shadow-lg'>
                    View projects
                    <ArrowUpRight className='w-4 h-4 ml-2' />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='border border-gray-200 bg-transparent  hover:bg-transparent  rounded-full transition-colors text-sm font-bold py-5 px-4'>
                    Get in Touch
                </motion.button>
            </div>

            <div className='flex gap-10'>
                <div>
                    <div className='stats'>
                        6+
                    </div>
                    <div className='stats-text'>Years exp.</div>
                </div>
                <div>
                    <div className='stats'>
                        40+
                    </div>
                    <div className='stats-text'>Projects shipped</div>
                </div>
                <div>
                    <div className='stats'>
                        12k+
                    </div>
                    <div className='stats-text'>GitHub stars</div>
                </div>
                <div>
                    <div className='stats'>
                        99.9%
                    </div>
                    <div className='stats-text'>Uptime avg.</div>
                </div>
            </div>

        </div>
    )
}

export default Hero