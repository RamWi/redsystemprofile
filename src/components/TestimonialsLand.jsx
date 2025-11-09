import React, { useRef, useEffect, useState } from "react";
import teamImage1 from "../assets/teampic1.jpg";
import teamImage2 from "../assets/teampic2.jpg";
import teamImage3 from "../assets/teamspic3.jpg";
import teamImage4 from "../assets/teamspic4.jpg";
import { testimonials } from "./TestiData";




const teamPhotos = [teamImage1, teamImage2, teamImage3, teamImage4];

const TesteimonialsLand = () => {
    const scrollRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const intervalTime = 6000; // 6 seconds

    useEffect(() => {
        const scroll = scrollRef.current;
        const slideWidth = scroll.offsetWidth;

        // Auto scroll logic
        const timer = setInterval(() => {
        setCurrent((prev) => {
            const next = (prev + 1) % testimonials.length;
            scroll.scrollTo({
            left: next * slideWidth,
            behavior: "smooth",
            });
            return next;
        });
        }, intervalTime);

        // Track manual scroll
        const handleScroll = () => {
        const index = Math.round(scroll.scrollLeft / slideWidth);
        setCurrent(index);
        };

        scroll.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(timer);
            scroll.removeEventListener("scroll", handleScroll);
            };
    }, []);

    return (
        <>
            <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-[#0B141A] via-[#111827] to-[#111111] relative">
                {/* Title */}
                <div className="text-center mb-14 px-7">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        WHAT OUR <span className="text-red-500">CLIENTS SAY</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm md:text-base">
                        Real experiences from our happy partners and clients.
                    </p>
                </div>

                {/* Content wrapper (2 columns layout) */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-16 gap-10">
                    {/* Left side: Static photo collage */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
                        {teamPhotos.map((photo, index) => (
                            <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg border border-red-500/20"
                            >
                                <img
                                    src={photo}
                                    alt={`Team ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - testimonials carousel */}
                    <div className="w-full md:w-1/2 relative">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full"
                    >
                        {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="w-full shrink-0 snap-center flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-10 bg-[#111827]/70 rounded-xl shadow-inner shadow-red-500/40 backdrop-blur-md border border-red-500/10"
                        >
                            <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                “{item.message}”
                            </p>
                            <h4 className="text-xl font-semibold text-white">
                                {item.name}
                            </h4>
                            <p className="text-red-400 text-sm font-medium">{item.role}</p>
                        </div>
                        ))}
                    </div>

                    {/* Bullet Indicators */}
                    <div className="flex justify-center mt-6 space-x-3">
                        {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            current === index
                                ? "bg-red-500 scale-125 shadow-[0_0_10px_#ff1a1a]"
                                : "bg-gray-500"
                            }`}
                        ></div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Top & bottom red shadow */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-red-600/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-600/30 via-transparent to-transparent pointer-events-none"></div>
            </section>

        </>
    );
};

export default TesteimonialsLand;
