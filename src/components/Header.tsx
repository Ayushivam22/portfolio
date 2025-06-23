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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`header sticky top-0 flex justify-between h-16 items-center z-50 shadow-orange-500/20 shadow-md transition-colors px-4 md:px-24 duration-300 ${
        isSticky ? "bg-orange-300/60 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="logo">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          AKS
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        {/* Desktop Nav */}
        <div className="hidden nav gap-4 md:flex">
          {navElements.map((element) => (
            <button
              key={element}
              onClick={() => scrollToSection(element)}
              className="text-sm font-medium hover:underline transition"
            >
              {element}
            </button>
          ))}
        </div>

        {/* Download Button */}
        <div className="downloadcv-btn">
          <a href="https://www.canva.com/design/DAGlo4LnZRg/aZK-qUgTcCE3agvS8pva0A/view?utm_content=DAGlo4LnZRg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf09073a485" target="_blank">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-2 text-xs rounded-md transition w-auto shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">
            Download CV
          </button>
          </a>
        </div>

        {/* Mobile Dropdown */}
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
              ${
                dropdownOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }
            `}
          >
            {navElements.map((element) => (
              <button
                key={element}
                onClick={() => {
                  scrollToSection(element);
                  setDropdownOpen(false);
                }}
                className="text-left px-4 py-2 border-b last:border-b-0 border-orange-200 hover:bg-orange-200 transition"
              >
                {element}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
