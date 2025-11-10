import { portfolios } from "../datas/PortoData"

function PortoWork(){
    return(
        <>
            <section className="w-full py-16 md:py-24 bg-[#0B141A] text-gray-300">
                {/* Title */}
                <div className="text-center mb-10 px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-2 uppercase">
                        Portofolio Kami
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Kami telah dipercaya berbagai UMKM untuk membangun solusi digital yang
                        berdampak langsung pada penjualan dan citra bisnis mereka. Berikut
                        beberapa hasil karya kami yang membantu klien tampil lebih profesional
                        dan menjangkau lebih banyak pelanggan.
                    </p>
                </div>

                {/* Grid Portofolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
                    {portfolios.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#111827] rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all duration-300"
                        >
                            <a href={item.link} className="flex flex-col h-full" target="_blank" rel="noopener noreferrer">
                                <div className="w-full h-64 md:h-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-center hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-grow flex items-center justify-center bg-[#0B141A] p-5">
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default PortoWork