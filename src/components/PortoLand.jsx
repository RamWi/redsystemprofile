import React from "react";
import Marquee from "react-fast-marquee";

import balinadipatour from "../assets/Bali Nadipa Tour.png";
import goodponesel from "../assets/Good Ponsel. Good Phone. For Everyone.png";
import dmctravel from "../assets/DJT-DMC Travel.png";
import holytirta from "../assets/Holy Tirtha.png";
import lingkarmedika from "../assets/lingkarmedika.png";
import mykindbeauty from "../assets/My Kind Of Beauty.png";

function PortoLand(){

const portos =[mykindbeauty, lingkarmedika, holytirta, dmctravel, goodponesel, balinadipatour]

    return(
        <>
            <section className="relative w-full bg-[#0B141A] py-16 overflow-hidden animate-pulse">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center px-6">
                    {/* Title */}
                    <h3 className="text-white text-2xl md:text-3xl font-semibold text-center mb-4">
                        Trusted by <span className="text-red-500">Leading Brands</span>
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
                            {portos.map((porto, index) => (
                            <img
                                key={`top-${index}`}
                                src={porto}
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
                            {portos.map((porto, index) => (
                            <img
                                key={`bottom-${index}`}
                                src={porto}
                                alt={`porto-${index}`}
                                className="h-70 w-auto mx-10 object-contain opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_10px_#ff1a1a] transition-all duration-300"
                            />
                            ))}
                        </Marquee>
                    </div>

                    <button>See more</button>
                </div>
            </section>
        </>
    )
}

export default PortoLand;