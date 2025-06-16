import  { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Certificates = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const certificates = [
        {
            label: "Certificate 1",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191076/cert2_sp8eyx.png",
        },
        {
            label: "Certificate 2",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191075/cert4_dwsegb.jpg",
        },
        {
            label: "Certificate 3",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191078/cert1_wvvu1b.png",
        },
        {
            label: "Certificate 4",
            image: "https://res.cloudinary.com/den5u58in/image/upload/v1749191076/cert3_jni1us.png",
        },
    ];

    const scroll = (direction: string) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth; // Scroll by full container width
        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className="py-4 text-4xl font-bold ">Certificates</div>

            {/* Outer wrapper for arrows positioning */}
            <div className="relative w-full ">

                {/* Navigation Arrows */}
                <div
                    className="absolute flex items-center top-0 left-0 h-full z-10 text-orange-700 text-5xl lg:text-9xl cursor-pointer "
                    onClick={() => scroll("left")}
                >
                    <IoIosArrowBack />
                </div>
                <div
                    className="absolute flex items-center top-0 right-0 h-full z-10 text-orange-700 text-5xl lg:text-9xl cursor-pointer "
                    onClick={() => scroll("right")}
                >
                    <IoIosArrowForward />
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex flex-row overflow-x-scroll w-full h-auto lg:h-[580px] bg-orange-200 rounded-4xl border-1 border-orange-700 py-4  scroll-smooth scroll-snap-x snap-x snap-mandatory scrollbar-hide"
                >
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center w-full aspect-[16/9]  snap-start"
                        >
                            <img
                                src={cert.image}
                                alt={cert.label}
                                className={`w-auto h-full object-contain`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default Certificates;
