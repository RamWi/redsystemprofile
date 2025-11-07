import React from "react";

const MediaSection = ({
    title = "Judul Section",
    description = "Ini adalah deskripsi singkat tentang bagian ini. Anda dapat mengganti teks ini dengan konten yang sesuai untuk profil, layanan, atau fitur produk Anda. Gunakan komponen ini berulang kali dengan konten berbeda.",
    image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    reverse = false, // kalau true → gambar di kanan, teks di kiri
}) => {
    return (
        <>
        <section
            className={`w-full py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12 ${
                reverse ? "md:flex-row-reverse" : ""
            } bg-[#0B141A] text-gray-300`}
            >
            {/* Gambar */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                src={image}
                alt="section illustration"
                className="rounded-xl shadow-[0_0_25px_rgba(255,0,0,0.25)] w-full max-w-lg object-cover"
                />
            </div>

            {/* Teks */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                {title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {description}
                </p>
            </div>
            </section>
        </>
    
    );
};

export default MediaSection;
