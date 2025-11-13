import React from "react";
import Marquee from "react-fast-marquee";

import { portfolios } from "../datas/PortoData";
import { Link } from "react-router-dom";

function PortoLand(){

    return(
        <>
            <section id="porto" className="relative w-full bg-[#0B141A] py-16 overflow-hidden animate-pulse">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center px-6">
                    {/* Title */}
                    <h3 className="text-red-500 text-2xl md:text-3xl font-semibold text-center mb-4">
                        Trusted by <span className="text-white">Leading Brands</span>
                    </h3>

                    {/* 🔺 TOP MARQUEE (scroll kiri) */}
                    <div className="w-full overflow-hidden h-70 ">
                        <Marquee
                            gradient={true}
                            gradientWidth={80}
                            pauseOnHover={true}
                            speed={40}
                            direction="left"
                            className="select-none"
                        >
                            {portfolios.map((porto, index) => (
                            <img
                                key={`top-${index}`}
                                src={porto.image}
                                alt={`porto-${index}`}
                                className="h-70 w-auto mx-10 object-contain opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_#ff1a1a] transition-all duration-300"
                            />
                            ))}
                        </Marquee>
                    </div>

                    {/* 🔻 BOTTOM MARQUEE (scroll kanan) */}
                    <div className="w-full h-70 overflow-hidden">
                        <Marquee
                            gradient={true}
                            gradientWidth={80}
                            pauseOnHover={true}
                            speed={40}
                            direction="right"
                            className="select-none"
                        >
                            {portfolios.map((porto, index) => (
                            <img
                                key={`bottom-${index}`}
                                src={porto.image}
                                alt={`porto-${index}`}
                                className="h-70 w-auto mx-10 object-contain opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_#ff1a1a] transition-all duration-300"
                            />
                            ))}
                        </Marquee>
                    </div>

                    <Link to="/work" className="self-center px-6 py-2 bg-red-600 hover:bg-red-300 rounded-md text-white transition-all duration-300">
                        See More
                    </Link>
                </div>
            </section>
        </>
    )
}

export default PortoLand;