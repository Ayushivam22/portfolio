import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { certificates } from "../data/certificates";

const Certificates = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

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
                    className="flex flex-row overflow-x-scroll w-full h-auto lg:h-[580px] bg-orange-200 rounded-2xl border-1 border-orange-700 py-4  scroll-smooth scroll-snap-x snap-x snap-mandatory scrollbar-hide"
                >
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center w-full aspect-[16/9]  snap-start"
                        >
                            <img
                            loading="lazy"
                                src={cert.image}
                                alt={cert.label}
                                className={`w-auto h-full object-contain select-none`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
