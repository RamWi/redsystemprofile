import { Link, useParams } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import ReleatedService from "../ReleatedService";

import { services, DetailHero, DetailServices } from "../../datas/DetailServices";


function PerService(){

    const { id } = useParams(); // ambil dari URL misalnya /products/akunta
    const heroService = DetailHero[id];
    const service = DetailServices[id]; // ambil data sesuai id

    
    if (!heroService|| !service) {
        return (
        <div className="min-h-screen flex items-center justify-center text-white bg-[#0B141A]">
            <h2>❌ Produk tidak ditemukan</h2>
        </div>
        );
    }

    const validItems = service.slice(
    0,
    service.findIndex((item) => !item.descT || item.descT.trim() === "")
    );

    // id yang SUDAH ditampilkan
    const displayedId = id;

    // data baru yang belum ditampilkan
    const remainingServices = services.filter(
        (item) => !item.link.includes(displayedId)
    );
console.log(displayedId);
    

    return(
        <>
            <Header />

            <HeroSection 
                background={heroService.background}
                title={heroService.title}
                subtitle={heroService.subtitle}
                textPosition="left"
                buttonPrimary={{ text: "Book a Meeting", link: "#project" }}
            />

              {/* Title Section */}
                <div className="text-center w-full bg-[#0B141A] text-gray-200 px-6 md:px-16 py-7">
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        {heroService.subtitle}
                    </p>
                </div>
            

            <CardSection layout="horizontal" data={service} />
        
                {/* Content */}
                <section className="w-full bg-[#0B141A]">
                    <div className="flex flex-col gap-10 max-w-5xl w-full text-gray-200 px-6 py-6 md:px-16">
                        {(validItems.length ? validItems : service).map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row gap-4 border-l-4 border-red-600 pl-6"
                            >
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                        {item.descT}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Button */}
                <div className="flex justify-center bg-[#0B141A] py-12">
                    <a href="https://api.whatsapp.com/send/?phone=6281228663080&text&type=phone_number&app_absent=0" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300">
                        Book a Meeting
                    </a>
                </div>

                 {/* Title Section */}
                <div className="text-center w-full bg-[#0B141A] text-gray-200 px-6 md:px-16 py-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                        <span className="text-red-500">Releated</span> SERVICE
                    </h2>
                </div>


                <ReleatedService data={remainingServices}  currentId="{id}"/>
                

            <Footer />
        </>
    )
}

export default PerService