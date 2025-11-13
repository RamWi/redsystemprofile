import React, { useState } from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductWork from "../components/ProductWork";
import PortoWork from "../components/PortoWork";


function Work(){

    const [activeTab, setActiveTab] = useState("semua"); // default tab

    const renderContent = () => {
        switch (activeTab) {
        case "produk":
            return <ProductWork />;
        case "portofolio":
            return <PortoWork />;
        default:
            return (
            <>
                <ProductWork />
                <PortoWork />
            </>
            );
        }
    };

    return(
        <>
            <Header />

            <section className="w-full min-h-screen bg-[#0B141A] text-gray-300 py-16 px-6 md:px-20 transition-all duration-500">
                {/* ====== Tabs ====== */}
                <div className="flex justify-center gap-4 mb-10">
                    {["semua", "produk", "portofolio"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-md font-medium transition-all duration-300 border ${
                        activeTab === tab
                            ? "bg-red-600 border-red-500 text-white shadow-[0_0_10px_rgba(255,0,0,0.4)]"
                            : "md:border-gray-500 bg-transparent text-gray-400 md:hover:border-red-400"
                        }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                    ))}
                </div>

                {/* ====== Konten yang Berganti ====== */}
                <div className="transition-all duration-700">{renderContent()}</div>
            </section>

            <Footer />
        </>
    )
}

export default Work