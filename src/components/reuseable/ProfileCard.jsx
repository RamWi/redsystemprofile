import React from "react";

const ProfileCard = ({
    name = "Nama Lengkap",
    role = "Posisi / Profesi",
    image = "https://images.unsplash.com/photo-1603415526960-f7e0328aab97?auto=format&fit=crop&w=800&q=80",
    description = "Deskripsi singkat tentang orang ini. Anda dapat menambahkan biografi atau peran dalam perusahaan.",
    className = "",
}) => {
    return (
        <div
            className={`bg-[#111827] border border-red-500/20 rounded-2xl shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all duration-500 overflow-hidden text-gray-300 max-w-sm w-full ${className}`}
        >
        {/* Foto Profil */}
        <div className="w-full h-72 overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
        </div>

        {/* Konten */}
            <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">{name}</h3>
                <p className="text-red-500 font-medium mt-1 mb-3">{role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
