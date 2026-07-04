import { Dot } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-2xl mx-auto flex items-center h-auto gap-4 flex-col mt-20'>

            <div className='flex gap-1 items-center border border-gray-300 rounded-full px-4 py-2'>
                <Dot className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse' />
                <span className='text-[#6D5FA8] font-black'>AVAILABLE FOR WORK · SAN FRANCISCO</span>
            </div>

            <div>
                <h1>Full-Stack</h1>
                <h1>Developer</h1>
            </div>

            <div>
                <p>I build scalable systems, elegant interfaces, and open-source tools that engineers actually want to use. 6 years in production.</p>
            </div>

            <div className='flex gap-2'>
                <button className='bg-[#7c3aed] rounded-full hover:opacity-90 transition-opacity text-white text-sm font-bold px-5 py-5 animate-bounce '>View Projects</button>
                <button className='border border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white rounded-full transition-colors text-sm font-bold px-5 py-5'>Get in Touch</button>
            </div>

            <div className='flex gap-10'>
                <p>
                    <h1>
                        6+
                    </h1>
                    <span>Years exp.</span>
                </p>
                <p>
                    <h1>
                        40+
                    </h1>
                    <span>Projects shipped</span>
                </p>
                <p>
                    <h1>
                        12k+
                    </h1>
                    <span>GitHub stars</span>
                </p>
                <p>
                    <h1>
                        99.9%
                    </h1>
                    <span>Uptime avg.</span>
                </p>
            </div>

        </div>
    )
}

export default Hero