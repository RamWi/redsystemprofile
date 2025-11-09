import React from "react";

const MediaSection = ({
    image,
    classImage,
    reverse = false, // kalau true → gambar di kanan, teks di kiri
    children, // seluruh isi teks & komponen dikirim dari luar
}) => {
    return (
        <section
            className={`w-full py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12 ${
                reverse ? "md:flex-row-reverse" : ""
            } bg-[#0B141A] text-gray-300`}
        >
            {/* Bagian Gambar */}
            <div className="w-full h-full md:w-1/2 flex justify-center">
                <img
                    src={image}
                    alt="section illustration"
                    className={`rounded-xl shadow-[0_0_25px_rgba(255,0,0,0.25)] w-full ${classImage} max-w-lg object-cover`}
                />
            </div>

            {/* Bagian Konten (children dari luar) */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                {children}
            </div>
        </section>
    );
};

export default MediaSection;
