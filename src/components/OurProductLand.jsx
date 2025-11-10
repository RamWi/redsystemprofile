import React, { useRef } from "react";

import ProductList from "./reuseable/ProductList";
import { Link } from "react-router-dom";


const OurProducts = () => {
    const scrollRef = useRef(null);

    
    return (
        <section className="relative w-full bg-linear-to-b from-[#0B141A] via-[#111827] to-[#111111] py-10 md:py-20">
            {/* Title */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                    <span className="text-red-500"> OUR </span> PRODUCTS
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
                <ProductList>
                    <Link to="/work" className="self-center md:self-start flex bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition-all duration-300">
                        Learn More
                    </Link>
                </ProductList>
            </div>
        
        </section>
    );
};

export default OurProducts;
