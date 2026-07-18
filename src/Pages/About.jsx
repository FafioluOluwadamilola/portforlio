import { GitForkIcon, Link } from "lucide-react"
import BackgroundBlob from "../Components/BackgroundBlob"

const About = () => {
    return (
        <div className="w-full min-h-screen relative overflow-hidden">


            <div className=" max-w-6xl mx-auto justify-center items-center grid grid-cols-2 gap-20 mt-30 main-font overflow-hidden">
            
            <BackgroundBlob color="#7C3AED" style={{ top: "-100px", right: "-80px" }} />

                <div className="grid grid-rows-2 gap-3">
                    <div>
                        <img
                            src="https://images.pexels.com/photos/36713414/pexels-photo-36713414.jpeg"
                            className="w-full h-74 object-cover rounded-2xl"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <img
                            src="https://images.pexels.com/photos/36713413/pexels-photo-36713413.jpeg"
                            className="w-full h-74 object-cover rounded-2xl"
                        />

                        <span className="w-full h-74 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#0891b2] text-white text-center flex items-center justify-center p-4">
                            6+<br />
                            Years building production software
                        </span>

                    </div>
                </div>

                <div className="flex flex-col gap-10">

                    <div>
                        <h1 className="text-sm font-bold mb-4 tracking-wide text-[#A78BFA]">
                            ABOUT ME
                        </h1>
                        <h2 className="heading-font text-5xl font-semibold">
                            Engineer by trade, <br />
                            <div className="text-gradient">
                                builder by nature.
                            </div>
    
                        </h2>
                    </div>

                    <p className="text-lg">
                        I started writing code at 15 — a terrible PHP blog, then a useful Python scraper, then eventually things that people actually shipped. Today I build production systems across the full stack at companies from seed-stage startups to Series C.
                        <br /><br />
                        B.Sc. in Computer Science from UC Berkeley. I care deeply about code quality, well-reasoned architecture, and teams that move fast without breaking things.
                        <br /><br />
                        Off the keyboard: hiking trails, home lab experiments, and finding excuses to read about distributed systems over strong coffee.
                    </p>

                    <div className="flex gap-2">
                        <a 
                            href="https://github.com/FafioluOluwadamilola"
                            className="w-fit px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#0891b2] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitForkIcon className="mr-2" />
                            Github 
                        </a>
    
                        <a 
                            href="https://www.linkedin.com/in/oluwadamilola-fafiolu-410096325"
                            className="w-fit px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#0891b2] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Link className="mr-2" />
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About