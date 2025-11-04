import React, { useRef, useEffect, useState } from "react";
import logoakunta from "../assets/akuntalogo.png";
import logoforstaff from "../assets/logo-forstaff-1024x357.png";
import logoredpos from "../assets/redposlogo-5-1024x237.png";
import lakunta from "../assets/akuntalayout.png";
import lforstaff from "../assets/forstafflayout.png";
import lredposs from "../assets/redpostlayoutss-gtpos-1024x512.jpg";

const products = [
    {
        id: 1,
        title: "For Staff",
        desc: "With the power of AI, turn your website vision into a meaningful brief, sitemap and wireframe at near-instant speed.",
        image: lforstaff,
        logo : logoforstaff,
        button: "Learn More",
    },
    {
        id: 2,
        title: "Akunta",
        desc: "Generate responsive wireframes instantly using AI. Adjust layout and structure in seconds, not hours.",
        image: lakunta,
        logo : logoakunta,
        button: "Learn More",
    },
    {
        id: 3,
        title: "Red Pos",
        desc: "Get professional website copy instantly. Let AI write engaging, SEO-friendly content tailored to your product.",
        image: lredposs,
        logo : logoredpos,
        button: "Hubungi Kami",
    },
];

const OurProducts = () => {
    const scrollRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const intervalTime = 6000; // 6 seconds

    useEffect(() => {
        const scroll = scrollRef.current;
        const slideWidth = scroll.offsetWidth;

        // Auto scroll logic
        const timer = setInterval(() => {
        setCurrent((prev) => {
            const next = (prev + 1) % products.length;
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
        <section className="w-full py-20 overflow-hidden bg-gradient-to-r from-[#0B141A] via-[#111827] to-[#111111] opacity-80">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    OUR <span className="text-red-500">PRODUCTS</span>
                </h2>
            </div>

            {/* Scroll Snap Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full"
            >
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="w-full shrink-0 snap-center flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-12 gap-10"
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl shadow-lg w-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2 flex flex-col items-start">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {item.title}
                            </h3>
                            <img src={item.logo} alt={item.logo} className="h-20 object-contain items-start" />
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {item.desc}
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-red-500 transition">
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bullet Indicators */}
            <div className="flex justify-center mt-10 space-x-3">
                {products.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        current === index ? "bg-red-500 scale-125" : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default OurProducts;
