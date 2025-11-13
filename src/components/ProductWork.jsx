import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { products } from "../datas/ProductData";
// Ambil komponen utama kamu (sudah ada logo, phrase, desc, button)
import ProductList from "./reuseable/ProductList";

function ProductWork(){
    return(
        <>
            <section className="relative w-full h-full bg-linear-to-b from-[#0B141A] via-[#111827] to-[#111111] py-1 overflow-hidden">
                {/* === TITLE === */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        OUR <span className="text-red-500">PRODUCTS</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-base md:text-lg">
                        Explore our solutions that empower your business transformation.
                    </p>
                </div>

                <div className="relative w-full bg-[#0B141A] text-gray-300 py-10 md:py-16 px-6 md:px-16 overflow-hidden">

                    {/* === Custom Top Navigation Buttons === */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                        <button className="custom-prev px-6 py-2 bg-red-600 rounded-md text-white transition-all duration-300">
                        ←
                        </button>
                        <button className="custom-next px-6 py-2 bg-red-600 rounded-md text-white transition-all duration-300">
                        →
                        </button>
                    </div>
                    {/* === SWIPER === */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                        }}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        autoplay={{ delay: 20000, disableOnInteraction: true }}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={50}
                        className="w-full h-full"
                    >
                        {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            {/* === Product Section === */}
                            <ProductList filterIds={[item.id]}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-center md:self-start flex bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition-all duration-300"
                            >
                                {item.button}
                            </a>
                            </ProductList>

                            {/* === Key Advantage Section === */}
                            <div className="w-full bg-[#0B141A] py-14 px-6 md:px-20 border-t border-gray-800">
                            <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-8 text-center md:text-left">
                                Key Advantages of Using {item.title}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                                {item.advantages?.map((adv, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#111827] rounded-xl p-6 shadow-[0_0_15px_rgba(255,0,0,0.15)] hover:shadow-[0_0_25px_rgba(255,0,0,0.35)] transition-all duration-500"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                    {adv.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {adv.desc}
                                    </p>
                                </div>
                                ))}
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* === CUSTOM SWIPER STYLE === */}
                <style>
                    {`
                        .swiper-pagination-bullet {
                            background-color: #666;
                            opacity: 1;
                            margin: 0;
                            padding: 0;
                        }
                        .swiper-pagination-bullet-active {
                            background-color: #ff1a1a;
                            transform: scale(1.2);
                            box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                        }
                    `}
                </style>
            </section>
        </>
    )
}

export default ProductWork