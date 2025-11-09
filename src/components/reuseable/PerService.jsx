import { useParams } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";

import HeroImage from "../../assets/hero-bg.jpg";

import { DetailHero } from "../DetailServices";
import { DetailServices } from "../DetailServices";


function PerService(){

    const { id } = useParams(); // ambil dari URL misalnya /products/akunta
    const heroService = DetailHero[id]
    const service = DetailServices[id]; // ambil data sesuai id

    if (!heroService||!service) {
        return (
        <div className="min-h-screen flex items-center justify-center text-white bg-[#0B141A]">
            <h2>❌ Produk tidak ditemukan</h2>
        </div>
        );
    }

    return(
        <>
            <Header />

            <HeroSection 
                background={heroService.background}
                title={heroService.title}
                subtitle={heroService.subtitle}
                textPosition="left"
                buttonPrimary={{ text: "Mulai Project", link: "#project" }}
            />

              {/* Title Section */}
                <div className="text-center w-full bg-[#0B141A] text-gray-200 px-6 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        WEBSITE <span className="text-red-500">DEVELOPMENT</span> SERVICE
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-base md:text-lg">
                        Helping businesses achieve a powerful digital presence through
                        creative design, strong performance, and modern technology.
                    </p>
                </div>
            

            <CardSection layout="horizontal" data={service} />
        
                {/* Content */}
                <div className="flex flex-col gap-10 max-w-5xl w-full bg-[#0B141A] text-gray-200 px-6 md:px-16">
                    {service.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-4 border-l-4 border-red-600 pl-6"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-12">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300">
                        Book a Meeting
                    </button>
                </div>

                 {/* Title Section */}
                <div className="text-center w-full bg-[#0B141A] text-gray-200 px-6 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        <span className="text-red-500">Releted</span> SERVICE
                    </h2>
                </div>

                <CardSection layout="horizontal">
                    <div className="flex justify-center mt-12">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300">
                            Book a Meeting
                        </button>
                    </div>
                </CardSection>

            <Footer />
        </>
    )
}

export default PerService