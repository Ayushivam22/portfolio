import { useEffect, useState } from "react";
import { socials } from "../data/socials";
import { skills } from "../data/skills";

const Hero = () => {
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress(skills.map((skill) => skill.level));
        }, 300); 
        return () => clearTimeout(timeout);
    }, [skills]);
    return (
        <div id="home" className="Container flex flex-col scroll-mt-16">
            <div className="hero-upper flex mt-12 flex-col md:flex-row ">
                <div className="hero-upper-left flex flex-col md:basis-7/10">
                    <p className="text-2sm font-medium">Hi, I am</p>
                    <h2 className="text-4xl font-extrabold text-orange-500 mt-2 ">
                        Ayush Kumar Shivam
                    </h2>
                    <h1 className="text-6xl md:text-5xl font-extrabold leading-tight">
                        Aspiring
                        <div className="flex">
                            <div className="flex  bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text text-7xl pb-4">
                                <b>Software Engineer</b>
                            </div>
                        </div>
                    </h1>
                    <div className="text-gray-600 px-10 mb-4 text-pretty">
                        Full-Stack Dev | 300+ LeetCode | 1600+ CodeChef | CP &
                        DSA
                    </div>
                    <div className="flex px-10">
                        <a
                            href="https://www.linkedin.com/in/ayushivam22/"
                            target="_blank"
                        >
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition w-auto shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 hover:cursor-pointer">
                                Hire Me
                            </button>
                        </a>
                    </div>
                </div>

                <div className="hero-upper-right  w-full flex flex-col items-center md:items-start space-y-4 md:basis-3/10">
                    <div className="">
                        {/* Circular Border Container */}
                        <div className="  rounded-b-full  overflow-hidden">
                            <div className="rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-500 p-1 w-64 h-64 flex items-center justify-center mt-10 ">
                                {/* Inner white circle for border effect */}
                                <div className=" bg-white rounded-full w-full h-full flex items-center justify-center scale-x-[-1]  ">
                                    {/* Lifted PNG Image */}
                                    <img
                                    rel="preload"
                                        src="https://res.cloudinary.com/den5u58in/image/upload/v1750685205/aks_n9qo7p.png"
                                        alt="Profile"
                                        className="-translate-y-14 object-cover scale-150 hover:scale-160 transition-transform hover:-translate-y-16 duration-300 ease-in-out "
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex justify-center items-center mt-2 space-x-4 text-orange-400 text-xl">
                            {socials.map(({ href, label, Icon }) => (
                                <a href={href} target="_blank" key={label}>
                                    <div className="flex items-center gap-2  p-1 group cursor-pointer h-10 hover:border-b-1 hover:scale-120 rounded-full  hover:shadow-xl shadow-orange-600/60 transition-all duration-200 ease-in-out">
                                        <Icon className="" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-lower flex justify-center items-center my-10">
                <div className="hero-lower-left basis-4/10 w-full hidden md:flex flex-col items-center space-y-4">
                    <div className="">
                        {/* Circular Border Container */}
                        <div className="  rounded-b-full  overflow-hidden">
                            <div className="rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-500 p-1 w-64 h-64 flex items-center justify-center mt-10 ">
                                {/* Inner white circle for border effect */}
                                <div className=" bg-white rounded-full w-full h-full flex items-center justify-center">
                                    {/* Lifted PNG Image */}
                                    <img
                                    rel="preload"
                                        src="https://res.cloudinary.com/den5u58in/image/upload/v1750685205/aks2_qjkkqe.png"
                                        alt="Profile"
                                        className="-translate-y-0 object-cover scale-150 hover:scale-160 transition-transform hover:-translate-y-1 duration-300 ease-in-out "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="about"
                    className="hero-lower-right md:basis-6/10 flex flex-col items-center space-y-4 scroll-mt-16"
                >
                    <div className="text-2xl font-bold">About Me</div>
                    <div className="text-gray-600 px-10 mb-4 text-justify">
                        I'm a second-year student at IIIT Bhagalpur and a
                        passionate full stack developer with a knack for solving
                        complex problems through code. With solid experience in
                        the MERN stack and a strong foundation in data
                        structures and algorithms, I enjoy building scalable web
                        applications that offer smooth user experiences and
                        reliable backend systems. Beyond technical skills, I
                        bring the curiosity, discipline, and problem-solving
                        mindset essential for a great software engineer. Whether
                        it's through competitive coding, collaborative projects,
                        or continuous learning, I strive to grow every day and
                        contribute meaningfully to the tech community.
                    </div>
                    <div className="font-bold flex justify-start w-full px-16 pt-5 text-xl">
                        Tech Stack & Proficiencies
                    </div>
                    <div className="flex flex-col items-center w-full">
                        {skills.map(({ name }, idx) => {
                            // Place marker 1% less than level, but not below 0
                            const levelEnd = Math.max(
                                0,
                                Math.min(100, progress[idx] - 1)
                            );
                            return (
                                <div
                                    key={name}
                                    className="flex flex-col w-full px-16 my-1"
                                >
                                    <div className="font-semibold text-gray-800">
                                        {name}
                                    </div>
                                    <div className="relative flex-1 w-full ">
                                        <div className="w-full h-2 bg-gray-800 rounded-full">
                                            <div
                                                className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full transition-all duration-1000 ease-in-out"
                                                style={{
                                                    width: `${progress[idx]}%`,
                                                }}
                                            />
                                            <div
                                                className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out"
                                                style={{ left: `${levelEnd}%` }}
                                            >
                                                <div className="w-4 h-4 bg-white border-5 border-orange-500 rounded-full shadow-md" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
