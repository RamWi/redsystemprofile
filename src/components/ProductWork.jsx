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
            <section className="relative w-full bg-gradient-to-b from-[#0B141A] via-[#111827] to-[#111111] py-16 md:py-24 overflow-hidden">
                {/* === TITLE === */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        OUR <span className="text-red-500">PRODUCTS</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-base md:text-lg">
                        Explore our solutions that empower your business transformation.
                    </p>
                </div>

                {/* === SWIPER === */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={50}
                    className="w-full"
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            {/* === Reuse Component ProductList === */}
        
                            <ProductList filterIds={[item.id]}>
                                <a href={item.link} target="_blank" className="self-center md:self-start flex bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition-all duration-300">
                                    {item.button}
                                </a>
                            </ProductList>
                            {/* === Tambahkan Key Advantage Section di bawah === */}
                            <div className="    w-full bg-[#0B141A] py-12 px-6 md:px-20 border-t border-gray-800">
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

                {/* === CUSTOM SWIPER STYLE === */}
                <style>
                    {`
                        .swiper-button-next,
                        .swiper-button-prev {
                            color: #ff1a1a;
                            transition: all 0.3s ease;
                        }
                        .swiper-button-next:hover,
                        .swiper-button-prev:hover {
                            color: #ffffff;
                        }
                        .swiper-pagination-bullet {
                            background-color: #666;
                            opacity: 1;
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