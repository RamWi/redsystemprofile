
import { Link } from "react-router-dom";
import { services } from "../datas/DetailServices";

function ServicesSection() {
    
    return (
        <section className="w-full py-20 px-6 md:px-16 bg-linear-to-r from-[#0B141A] via-[#111827] to-[#111111] opacity-80">
            {/* TITLE */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-red-500 mb-3">
                    OUR <span className="text-white">SERVICES</span>
                </h2>
                <p className="text-white">
                    We help clients speed up market entry, overcome digital challenges, and create their values through specialized services.
                </p>
            </div>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service) => (
                    <Link to={service.link}
                        key={service.id}
                        className={`group p-6 rounded-2xl shadow-sm ${service.bg} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    >
                        {/* ICON */}
                        <div className="text-red-500 mb-6">{service.icon}</div>

                        {/* TITLE */}
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                        {/* DESCRIPTION */}
                        <p className={`text-base ${service.arrowColor} mb-6 leading-relaxed`}>
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
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;