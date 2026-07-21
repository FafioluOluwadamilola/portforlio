import { Moon, Sun } from 'lucide-react'

const Header = () => {
    return (
        <header className="sticky top-0 inset-x-0 z-20 transition-all duration-500 border-b border-border overflow-hidden" >

            <div className='max-w-7xl sm:max-w-3xl md:max-w-4xl mx-auto flex justify-between items-center py-4 '>

                <div>
                    <h2 className='text-black font-bold text-lg'>Dammy.dev</h2>
                </div>

                <div className='flex gap-6 items-center font-semibold'>
                    <div>
                        <ul className='flex gap-6'>
                            <li className='header-color'>About</li>
                            <li className='header-color'>Skills</li>
                            <li className='header-color'>Projects</li>
                            <li className='header-color'>Contact</li>
                        </ul>
                    </div>



                    {/* Sun and Moon for dark and light mode */}
                    <div className='flex gap-2 bg-gray-100 rounded-full p-0.5'>
                        <Sun className='text-gray-500 rounded-full hover:text-black hover:animate-spin' />
                        <Moon className='text-gray-500 rounded-full hover:text-black' />
                    </div>

                    <div>
                        <button className='bg-[#7c3aed] rounded-full hover:opacity-90 transition-opacity text-white text-sm font-bold px-5 py-2 '>
                            Hire Me
                        </button>
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header