import { useState } from "react";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoLogoGithub,
} from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { projects } from "../data/project";


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const scroll = (direction: "left" | "right") => {
        if (direction === "left") {
            setCurrentIndex((prev) =>
                prev === 0 ? projects.length - 1 : prev - 1
            );
        } else {
            setCurrentIndex((prev) =>
                prev === projects.length - 1 ? 0 : prev + 1
            );
        }
    };

    return (
        <div className="flex flex-col items-center mt-12 w-full  ">
            <div className="py-4 text-4xl font-bold">Projects</div>

            <div className="project-container flex flex-col lg:flex-row w-full rounded-2xl bg-orange-200 p-2 md:p-8 gap-2 items-stretch border-orange-700 border-1">
                <div className="project-image relative lg:w-[70%]  flex justify-center items-center rounded-2xl border-1 border-orange-600 bg-orange-100">
                    {/* Arrows */}
                    <div className="absolute left-0 z-10 flex items-center h-full  text-5xl lg:text-9xl px-2 ">
                        <IoIosArrowBack
                            className="text-orange-700 hover:text-orange-600 hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer "
                            onClick={() => scroll("left")}
                        />
                    </div>
                    <div className="absolute right-0 z-10 flex items-center h-full  text-5xl lg:text-9xl px-2 ">
                        <IoIosArrowForward
                            className="text-orange-700 hover:text-orange-600 hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer"
                            onClick={() => scroll("right")}
                        />
                    </div>

                    {/* Image Slide */}
                    <div className="flex justify-center items-center w-full h-full  aspect-16/9">
                        <img
                            src={projects[currentIndex].image}
                            alt={projects[currentIndex].label}
                            className="w-auto h-full rounded-xl object-contain
                             select-none  p-1"
                        />
                    </div>
                </div>
                <div className="bg-orange-100 lg:w-[30%] gap-1 p-2 flex flex-col rounded-2xl ">
                    <div className="text-xl lg:text-3xl bg-orange-200 p-2 rounded-t-2xl">
                        {projects[currentIndex].title}
                    </div>

                    <div className="text-sm text-justify ">{projects[currentIndex].description}</div>
                    <div>
                        <span className="text-sm">Tech Stack:</span>
                        <ul className="list-disc pl-5">
                            {projects[currentIndex].techStack.map(
                                (tech, index) => (
                                    <li key={index} className="text-xs lg:text-md">
                                        {tech}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="flex mt-auto items-end gap-2 justify-around min-w-0">
                        <button className="flex shrink grow justify-center items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 min-w-0 ">
                            <IoLogoGithub className="text-2xl" />
                            <div className="text-sm truncate">Code</div>
                        </button>
                        <button className="flex shrink grow justify-center items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 min-w-0">
                            <CiVideoOn className="text-2xl" />
                            <div className="text-sm truncate">Demo</div>
                        </button>
                        <button className="flex shrink grow justify-center items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 min-w-0">
                            <GoLinkExternal className="text-2xl" />
                            <div className="text-sm truncate">Link</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
