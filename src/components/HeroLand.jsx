import React from "react";
import Hero from "../assets/hero-bg.jpg";

function HeroSection() {
    return (
        <section
            className="relative 
                w-full min-h-screen 
                flex items-center 
                bg-cover bg-no-repeat bg-[position:80%_50%] 
                text-white"
            style={{ backgroundImage: `url(${Hero})` }}

            >
            {/* Overlay gelap transparan agar teks tetap terbaca */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Konten di atas background */}
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 flex flex-col  md:flex-row items-center justify-between">
                
                {/* LEFT: TEXT AREA */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Solusi <span className="text-red-500">Digital</span> Masa Depan
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
                        Kami mengubah ide Anda menjadi aplikasi web dan mobile yang powerful.
                        Software house terpercaya dengan tim developer berpengalaman.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                        href="#project"
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Mulai Project →
                        </a>
                        
                        <a
                        href="#portfolio"
                        className="border border-gray-300 text-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                        >
                            Lihat Portfolio
                        </a>
                    </div>
                </div>

            </div>
            </section>
    );
}

export default HeroSection;
