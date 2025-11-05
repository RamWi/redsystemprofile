import React, { useRef } from "react";
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
        logo: logoforstaff,
        button: "Learn More",
    },
    {
        id: 2,
        title: "Akunta",
        desc: "Generate responsive wireframes instantly using AI. Adjust layout and structure in seconds, not hours.",
        image: lakunta,
        logo: logoakunta,
        button: "Learn More",
    },
    {
        id: 3,
        title: "Red Pos",
        desc: "Get professional website copy instantly. Let AI write engaging, SEO-friendly content tailored to your product.",
        image: lredposs,
        logo: logoredpos,
        button: "Hubungi Kami",
    },
];

const OurProducts = () => {
    const scrollRef = useRef(null);

    
    return (
        <section className="relative w-full bg-gradient-to-b from-[#0B141A] via-[#111827] to-[#111111] py-10 md:py-20">
            {/* Title */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    OUR <span className="text-red-500">PRODUCTS</span>
                </h2>
            </div>

            {/* Scroll Snap Container */}
            <div
                ref={scrollRef}
                className="
                relative
                w-[90%]
                mx-auto
                h-[90vh]
                overflow-y-auto
                snap-y snap-mandatory snap-start
                scroll-smooth
                no-scrollbar
                rounded-xl
                border border-gray-700/50
                shadow-[inset_0_12px_25px_6px_rgba(255,0,0,0.6),inset_0_-12px_25px_6px_rgba(255,0,0,0.6)]
                "
            >
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="
                        w-full min-h-[65vh]
                        flex flex-col md:flex-row
                        items-center justify-center
                        gap-10 md:gap-20
                        snap-start
                        px-3 md:px-9 py-6
                        transition-all duration-500
                        "
                    >
                        {/* Image Section */}
                        <div className="w-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl shadow-lg w-full  object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 flex flex-col items-start">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                {item.title}
                            </h3>
                            <img
                                src={item.logo}
                                alt={item.title}
                                className="h-16 mb-4 object-contain"
                            />
                            <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                                {item.desc}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
                
            </div>
        
        </section>
    );
};

export default OurProducts;
