import { Code, Globe } from "lucide-react";

const Skills = () => {

    const skills = [
        {
            name: "HTML",
            icon: Code 
        },
        {
            name: "CSS",
            icon: Code 
        },
        {
            name: "JavaScript",
            icon: Code
        },
        {
            name: "React",
            icon: Code
        },
        {
            name: "Tailwind CSS",
            icon: Globe 
        },
        {
            name: "Framer Motion",
            icon: Code
        },
        {
            name: "React Router",
            icon: Code
        },
        {
            name: "Node.js",
            icon: Code
        },
        {
            name: "Express.js",
            icon: Code
        },
        {
            name: "MongoDB",
            icon: Code 
        },
        {
            name: "Mongoose",
            icon: Code
        },
        {
            name: "JWT",
            icon: Code
        },
        {
            name: "bcrypt",
            icon: Code 
        },
        {
            name: "Git",
            icon: Code
        },
        {
            name: "GitHub",
            icon: Code
        },
        {
            name: "Vite",
            icon: Code
        },
        {
            name: "VS Code",
            icon: Code
        },
        {
            name: "Postman",
            icon: Code
        },
        {
            name: "MongoDB Atlas",
            icon: Code 
        },
        {
            name: "Next.js",
            icon: Code 
        },
        {
            name: "Appwrite",
            icon: Code
        }
    ];


    return (
        <div className="bg-[#F4F3FF] border-t border-b border-[#D8D6FF] w-full h-screen/2 p-20  mx-auto overflow-hidden">

            <div className=" max-w-5xl lg:max-w-6xl sm:max-w-full mx-auto">

                <div className="mb-10">
                    <h1
                        className="text-xs font-semibold main-font text-[#7C3AED] tracking-[0.2em] mb-4"
                    >
                        SKILLS & TOOLS
                    </h1>
    
                    <h1 className="text-5xl heading-font">What I work with.</h1>
    
                </div>
    
                <div className="flex flex-wrap gap-4">
                        {
                            skills.map((skill) => {
                                const Icon = skill.icon;
    
                                return (
                                    <button key={skill.name} className="flex items-center bg-[#D8D6FF] text-[#7C3AED] px-4 py-2 rounded-full text-sm font-semibold">
                                        <Icon />
                                        <span className="ml-2">{skill.name}</span>
                                    </button>
                                );
                            })
                        }
    
                </div>

            </div>
            
        </div>
    )
}

export default Skills