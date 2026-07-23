import ProjectCards from "../Components/ProjectCards"
import { projectData } from "../Data/Projects"

const Projects = () => {

    return (
        <div className="bg-[#F4F3FF] min-h-screen w-full p-20">

            <div className="max-w-6xl mx-auto main-font">

                <div className="mb-10">
                    <h1
                        className="text-xs font-medium main-font text-[#7C3AED] tracking-[0.2em] mb-4"
                    >
                        SELECTED WORK
                    </h1>

                    <h1 className="text-5xl heading-font">Projects I'm proud of.</h1>
                    <p className="text-md tracking-wide mt-3 text-[#6d5fa8]">Scroll through the 3D stage below — each plane is a project.</p>

                </div>

                <div>
                    {
                        projectData.map((project) => (
                            <ProjectCards key={project.name} project={project} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Projects