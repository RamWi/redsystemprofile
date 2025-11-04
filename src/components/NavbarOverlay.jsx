import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa";

function NavbarOverlay({ isOpen}){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
     const [clickedOnce, setClickedOnce] = useState(false); // untuk mendeteksi klik pertama

    if (!isOpen) return null;

    const handleServiceClick = (e) => {
        e.preventDefault();

        // jika dropdown belum dibuka → buka dropdown
        if (!isDropdownOpen && !clickedOnce) {
            setIsDropdownOpen(true);
            setClickedOnce(true);
            return;
        }

        // jika sudah pernah klik → arahkan ke halaman services
        window.location.href = "#services"; // bisa ubah ke link lain
    };



    return(
        <>
            {/* ==================== MOBILE MENU OVERLAY ==================== */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0B141A] flex flex-col justify-between items-center text-center z-40 transition-all duration-300">


                    {/* MAIN MENU LINKS */}
                    <ul className="flex flex-col justify-center items-center flex-1 mt-10 text-3xl font-light space-y-6">
                        <li className="link-nav cursor-pointer">Home</li>
                        <li className="link-nav cursor-pointer">About Us</li>
                        <li className="link-nav cursor-pointer">Work</li>
                        <li className="link-nav cursor-pointer">Contact</li>
                        <li className="link-nav cursor-pointer">Testimonials</li>
                        <li className="link-nav cursor-pointer">Article</li>
                        {/* Dropdown Section */}
                        <li className="relative flex flex-col items-center">
                            {/* Tombol utama Services */}
                            <a
                                href="#services"
                                onClick={handleServiceClick}
                                className="link-nav cursor-pointer flex items-center justify-center gap-2"
                            >
                                Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transition-transform duration-300 ${
                                        isDropdownOpen ? "rotate-180 text-red-500" : "rotate-0"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </a>

                            {/* Dropdown muncul di bawah Services */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isDropdownOpen
                                    ? "max-h-32 opacity-100 mt-4"
                                    : "max-h-0 opacity-0 mt-0"
                                }`}
                            >
                                <div className="grid md:flex grid-cols-2 gap-4 md:grid-cols-none md:gap-8 mt-5 justify-center items-center text-sm uppercase tracking-wider text-gray-400">
                                    <span className="link-nav cursor-pointer md:w-25 w-auto mx-5 flex items-center hover:text-white transition-all">
                                        Website 
                                        Development
                                    </span>
                                    <span className="link-nav cursor-pointer md:w-25 w-auto mx-5 flex items-center hover:text-white transition-all">
                                        Mobile Apps Development
                                    </span>
                                    <span className="link-nav cursor-pointer md:w-25 w-auto mx-5 flex items-center hover:text-white transition-all">
                                        ERP Development
                                    </span>
                                    <span className="link-nav cursor-pointer md:w-25 w-auto mx-5 flex items-center hover:text-white transition-all">
                                        IT Consultation
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <hr class="border-t-3 border-white-500 my-5 rounded-full w-100" />

                    <div className="flex justify-center items-center gap-8 mb-6 text-gray-400">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                        >
                            <FaInstagram size={24} />
                        </a>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-500 transition-all duration-300 transform hover:scale-110"
                        >
                            <FaWhatsapp size={24} />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                        >
                            <FaLinkedin size={24} />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <FaGithub size={24} />
                        </a>

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                        >
                            <FaFacebook size={24} />
                        </a>
                        </div>
                </div>
            )}
    
        </>
    )
}

export default NavbarOverlay
