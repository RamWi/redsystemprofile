import React, { useRef, useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Rini Swari",
        role: "Founder My Kind of Beauty",
        message:
        "Website dari RedSystem memang lain dari pada yang lain, bisnis saya berkembang dan lebih dikenal. Dengan strategi SEO dan tampilan profesional, penjualan meningkat drastis. Mantap!",

    },
    {
        id: 2,
        name: "Made Santara",
        role: "Direktur Samari Hills Villa",
        message:
        "Saya punya bisnis villa, sangat terbantu oleh website RedSystem karena sistem manajemen pemesanannya cepat dan terintegrasi. Sekarang saya bisa fokus ke pelayanan tamu."
    },
    {
        id: 3,
        name: "Dewi Kartika",
        role: "CEO Aroma Nusantara",
        message:
        "Tim RedSystem membantu digitalisasi usaha saya dari nol. Desainnya profesional, komunikasinya cepat, dan hasilnya melampaui ekspektasi.",
    },
];

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
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        WHAT OUR <span className="text-red-500">CLIENTS SAY</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm md:text-base">
                        Real experiences from our happy partners and clients.
                    </p>
                </div>

                {/* Scroll Snap Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full"
                >
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="w-full shrink-0 snap-center flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-12 gap-10"
                        >
                            {/* Client Image */}
                            <div className="flex justify-center md:w-1/3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-lg border-4 border-red-500/80 hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Testimonial Text */}
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                    “{item.message}”
                                </p>
                                <h4 className="text-xl font-semibold text-white">
                                    {item.name}
                                </h4>
                                <p className="text-red-400 text-sm font-medium">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bullet Indicators */}
                <div className="flex justify-center mt-10 space-x-3">
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

                {/* Top & bottom red shadow */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-red-600/30 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-600/30 via-transparent to-transparent pointer-events-none"></div>
            </section>

        </>
    );
};

export default TesteimonialsLand;
