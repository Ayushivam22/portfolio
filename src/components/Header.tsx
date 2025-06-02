import { IoMenu } from "react-icons/io5";

const Header = () => {
    const navElements = ["Home", "About", "Projects", "Contact"];
  return (
    <div className='header flex justify-between items-center'>
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
        <div>
            <button className="md:hidden text-2xl weight flex items-center justify-center p-1 rounded bg-orange-500 hover:border-orange-500 border-2 border-orange-400 cursor-pointer transition-colors">
                <IoMenu className="text-gray-300" />
            </button>
        </div>
        </div>

    </div>
  )
}

export default Header