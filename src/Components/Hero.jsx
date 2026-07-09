import { Dot } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-5xl w-full mx-auto flex items-center justify-center h-auto gap-10 flex-col mt-25'>

            <div className='flex gap-2 items-center border border-gray-300 rounded-full px-4 py-2'>
                <Dot className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse' />
                <span className='text-[#6D5FA8] font-light'>AVAILABLE FOR REMOTE OPPORTUNITIES</span>
            </div>

            <div className='text-center'>
                <h1 className='leading-none text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-bold'>
                    Full-Stack <span className='header-color'><br />Developer.</span>
                </h1>
            </div>

            <div className='text-center mb-6'>
                <p className='header-color text-xl text-muted-foreground leading-relaxed max-w-xl tracking-wide'>I build scalable systems, elegant interfaces, and open-source tools that engineers actually want to use. 6 years in production.</p>
            </div>

            <div className='flex gap-2 mb-9'>
                <button className='bg-[#7c3aed] rounded-full hover:opacity-90 transition-opacity text-white text-sm font-bold px-7 py-3'>View Projects</button>
                <button className='border border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white rounded-full transition-colors text-sm font-bold px-5 py-5'>Get in Touch</button>
            </div>

            <div className='flex gap-10'>
                <ol>
                    <li>
                        6+
                    </li>
                    <li>Years exp.</li>
                </ol>
                <ol>
                    <li>
                        40+
                    </li>
                    <li>Projects shipped</li>
                </ol>
                <ol>
                    <li>
                        12k+
                    </li>
                    <li>GitHub stars</li>
                </ol>
                <ol>
                    <li>
                        99.9%
                    </li>
                    <li>Uptime avg.</li>
                </ol>
            </div>

        </div>
    )
}

export default Hero