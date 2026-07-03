import { Sun } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-transparent flex justify-between py-5 px-100 h-auto border border-b-2 border-semi-transparent'>

        <div>
            <h2 className='text-black font-bold text-lg'>Dammy.dev</h2>
        </div>

        <div className='flex gap-6'>
            <div>
                <ul className='flex gap-6'>
                    <li className='header-color'>About</li>
                    <li className='header-color'>Skills</li>
                    <li className='header-color'>Projects</li>
                    <li className='header-color'>Contact</li>
                </ul>
            </div>


            {/* Sun and Moon for dark and light mode */}
            <div>
                <Sun className='bg-gray-100 '/>
            </div>

            <div>
                <button className='bg-[#A78BFA]'>
                    Hire Me
                </button>
            </div>

        </div>

    </div>
  )
}

export default Header