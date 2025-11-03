import React from "react";
import { FaCode, FaMobileAlt, FaLightbulb, FaPencilRuler } from "react-icons/fa";

function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "Website Development",
            desc: "We build responsive and functional websites",
            icon: <FaCode size={40} />,
            bg: "bg-black text-white",
            arrowColor: "text-white",
        },
        {
            id: 2,
            title: "Mobile Apps Development",
            desc: "We create mobile applications for all platforms",
            icon: <FaMobileAlt size={40} />,
            bg: "bg-white text-black border border-gray-200",
            arrowColor: "text-black",
        },
        {
            id: 3,
            title: "ERP Development",
            desc: "We design intuitive and engaging user interfaces",
            icon: <FaPencilRuler size={40} />,
            bg: "bg-white text-black border border-gray-200",
            arrowColor: "text-black",
        },
        {
            id: 4,
            title: "IT Consultation",
            desc: "We provide expert IT consulting services",
            icon: <FaLightbulb size={40} />,
            bg: "bg-black text-white",
            arrowColor: "text-white",
        },
    ];

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-[#0B141A] via-[#111827] to-[#111111] opacity-80">
            {/* TITLE */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white/">
                    OUR <span className="text-red-500">SERVICES</span>
                </h2>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group p-8 rounded-2xl shadow-sm ${service.bg} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    >
                        {/* ICON */}
                        <div className="text-red-500 mb-6">{service.icon}</div>

                        {/* TITLE */}
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                        {/* DESCRIPTION */}
                        <p className="text-base text-gray-400 md:text-gray-300 lg:text-gray-400 mb-6 leading-relaxed">
                        {service.desc}
                        </p>

                        {/* ARROW */}
                        <div className="flex justify-end">
                            <span
                                className={`text-xl ${service.arrowColor} group-hover:text-red-500 transition`}
                            >
                                →
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;