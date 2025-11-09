
import { Children } from "react";
import { BsBullseye } from "react-icons/bs";

const CardSection = ({ layout, data=[], children }) => {
    const cards = data.length > 0 ? data : [
    // Default data kalau tidak dikirim dari luar
        { icon: <BsBullseye className="text-red-500 text-2xl" />, title: "Default Card", content: "Default content..." }
    ];

    return (
        <section className="w-full bg-[#0B141A] text-gray-200 px-6 md:px-16">
            <div
                className={`grid ${
                layout === "horizontal"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "grid-cols-1 gap-8 max-w-3xl mx-auto"
                }`}
            >
                {cards.map((card, index) => (
                    <div
                    key={index}
                    className="bg-[#111827] rounded-xl p-6 shadow-md border border-red-500/10 hover:shadow-[0_0_25px_rgba(255,0,0,0.3)] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {card.icon}
                            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        </div>

                        {/* Jika ada list, tampilkan poin */}
                        {card.list ? (
                            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm leading-relaxed">
                            {card.list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400 text-sm leading-relaxed">
                            {card.content}
                            </p>
                        )}
                        {children}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardSection;