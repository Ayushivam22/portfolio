import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const navElements = ["Home", "About", "Projects", "Contact"];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`header sticky top-0 flex justify-between h-20 items-center  z-50 shadow-orange-500/20 shadow-md transition-colors -mx-24 px-24 duration-300  ${
                isSticky ? "bg-orange-300/60 backdrop-blur" : "bg-transparent"
            }`}
        >
            <div className='logo'>
                <h1 className='text-4xl'>AKS</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-6">
                <div className='hidden nav gap-4 md:flex '>
                    {navElements.map((element) => (
                        <a href={`#${element.toLowerCase()}`} key={element}>
                            {element}
                        </a>
                    ))}
                </div>
                <div className='downloadcv-btn'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition w-auto shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
                        Download CV
                    </button>
                </div>
                <div className="relative">
                    <button
                        className="md:hidden text-2xl weight flex items-center justify-center p-1 rounded bg-orange-500 hover:border-orange-500 border-2 border-orange-400 cursor-pointer transition-colors"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                        <IoMenu className="text-gray-300" />
                    </button>
                    <div
                        className={`
                            absolute right-0 mt-2 w-40 bg-orange-300 rounded-lg shadow-lg flex flex-col z-50
                            transition-all duration-300 origin-top
                            ${dropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                        `}
                    >
                        {navElements.map((element) => (
                            <a
                                href={`#${element.toLowerCase()}`}
                                key={element}
                                className="px-4 py-2 border-b last:border-b-0 border-orange-200"
                                onClick={() => setDropdownOpen(false)}
                            >
                                {element}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;