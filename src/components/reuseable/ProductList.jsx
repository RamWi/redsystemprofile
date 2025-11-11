import MediaSection from "./MediaSection";

import { products } from "../../datas/ProductData";

function ProductList({ filterIds = [], children }){
    
    const filteredProducts =
        filterIds.length > 0
        ? products.filter((item) => filterIds.includes(item.id))
        : products;

    return(
        <>
            {filteredProducts.map((item) => (
                <MediaSection image={item.image} key={item.id} classImage="w-100">
                    {/* === Konten Khusus Forstaff (Bagian Kanan) === */}
                    <div className="flex flex-col justify-center text-white">

                        {/* Logo + Divider + Title */}
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
                            {/* Logo */}
                            <img
                                src={item.logo}
                                alt={item.phrase}
                                className={`${item.logoS} object-contain flex flex-col`}
                            />

                            {/* Divider */}
                            <div className="w-1 h-14 bg-gray-600"></div>

                            {/* Title */}
                            <h6 className="flex flex-col font-extrabold leading-snug">
                                {item.phrase}
                            </h6>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-left text-sm justify-center md:text-lg leading-relaxed mb-6">
                            {item.desc}
                        </p>

                        {children}
                    </div>
                </MediaSection> 
            ))}
        </>
    )
}

export default ProductList