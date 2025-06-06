import { useEffect, useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Hero = () => {
    const socials = [
        {
            href: "https://github.com/Ayushivam22",
            label: "GitHub",
            Icon: SlSocialGithub,
        },
        {
            href: "https://www.linkedin.com/in/ayush-kumar-shivam-89a669247/",
            label: "LinkedIn",
            Icon: SlSocialLinkedin,
        },
        {
            href: "https://twitter.com/Ayushivam22",
            label: "Twitter",
            Icon: SlSocialTwitter,
        },
        {
            href: "https://www.instagram.com/ayush.shivam.7/",
            label: "Instagram",
            Icon: SlSocialInstagram,
        },
    ];
    const skills = [
        // add express.js, mongodb, mysql, postgresql, python, c++
        { name: "ReactJS", level: 95 },
        { name: "MongoDB", level: 91 },
        { name: "Express.js", level: 90 },
        { name: "Node.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind", level: 95 },
    ];
    // Animated progress state for each skill
    const [progress, setProgress] = useState(skills.map(() => 0));

    useEffect(() => {
        // Animate each bar after mount
        const timeout = setTimeout(() => {
            setProgress(skills.map((skill) => skill.level));
        }, 300); // delay for effect
        return () => clearTimeout(timeout);
    }, [skills]);
    return (
        <div className="Container">
            <div className="hero-upper flex mt-12 flex-col md:flex-row ">
                <div className="hero-upper-left flex flex-col ">
                    <p className="text-2sm font-medium">Hi, I am</p>
                    <h2 className="text-2xl font-extrabold text-orange-500 mt-2 ">
                        Ayush Kumar Shivam
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Aspiring
                        <div className="flex">
                            <div className="flex basis-2/10"> </div>
                            <div className="flex  basis-8/10 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text text-6xl pb-4">
                                <b>Software Engineer</b>
                            </div>
                        </div>
                    </h1>
                    <div className="text-gray-600 px-10 mb-4">
                        Passionate full stack developer and problem solver.
                        Solved 280+ DSA problems on LeetCode, rated 1500+ on
                        CodeChef. I love building scalable web applications and
                        sharpening my algorithmic thinking through competitive
                        programming.
                    </div>
                    <div className="flex px-10">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition w-auto shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                            Hire Me
                        </button>
                    </div>
                </div>

                <div className="hero-upper-right  w-full flex flex-col items-center space-y-4">
                    <div className="">
                        {/* Circular Border Container */}
                        <div className="  rounded-b-full  overflow-hidden">
                            <div className="rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-500 p-1 w-64 h-64 flex items-center justify-center mt-10 ">
                                {/* Inner white circle for border effect */}
                                <div className=" bg-white rounded-full w-full h-full flex items-center justify-center scale-x-[-1]  ">
                                    {/* Lifted PNG Image */}
                                    <img
                                        src="/src/assets/aks.png"
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
                                        src="/src/assets/aks2.png"
                                        alt="Profile"
                                        className="-translate-y-0 object-cover scale-150 hover:scale-160 transition-transform hover:-translate-y-1 duration-300 ease-in-out "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-lower-right md:basis-6/10 flex flex-col items-center space-y-4">
                    <div className="text-2xl font-bold">About Me</div>
                    <div className="text-gray-600 px-10 mb-4">
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
                    <div className="font-bold flex justify-start w-full px-16 pt-5 text-xl">Tech Stack & Proficiencies</div>
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
