import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191076/cert2_sp8eyx.png",
        },
        {
            title: "Project 2",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191075/cert4_dwsegb.jpg",
        },
        {
            title: "Project 3",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191078/cert1_wvvu1b.png",
        },
        {
            title: "Project 4",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191076/cert3_jni1us.png",
        },
        {
            title: "Project 5",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191076/cert2_sp8eyx.png",
        },
        {
            title: "Project 6",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191075/cert4_dwsegb.jpg",
        },
    ];
    
    return (
        <>
            <div className="relative my-12 transition-all duration-600 bg-yellow-400 ">
                <div className="grid grid-cols-3 grid-rows-3 transition-all duration-600 w-full px-10">
                    {projects.map((project, index) => (
                        <div className="relative">
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center w-full h-full bg-orange-200 rounded p-1 border-1 border-orange-700 py-4  scrollbar-hide"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-auto h-full object-contain`}
                                />
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full opacity-100 z-10 bg-orange-900 flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-auto h-full object-contain`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
