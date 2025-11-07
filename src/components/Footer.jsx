import logo from "../assets/redsystem-logo-white.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


function Footer(){
    return (
        <>
            <footer className="bg-[#0B141A] text-gray-300 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* ======= TOP SECTION ======= */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                        {/* --- Column 1: Logo & Intro --- */}
                        <div>
                            <img src={logo} alt="R.E.D Group" className="w-40 mb-4" />
                            <p className="text-sm leading-relaxed text-gray-400">
                                We blend sharp compliance with creative strategy — and always with
                                a touch of Bali warmth.
                            </p>

                            {/* Google Map */}
                            <div className="mt-6 w-full h-40 rounded-lg overflow-hidden border border-red-500/20 shadow-md">
                                    <iframe
                                        title="RED Group Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0880404142127!2d115.22327497481979!3d-8.676942091389914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240b628e0419d%3A0x3d9c3f7c67e7a13a!2sDenpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1699987688880!5m2!1sen!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                            </div>
                        </div>

                        {/* --- Column 2: Services --- */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                Our Services
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>Taxation</li>
                                <li>Accounting</li>
                                <li>Legal</li>
                                <li>Human Resource</li>
                                <li>IT Systems</li>
                                <li>Branding & Marketing</li>
                            </ul>
                        </div>

                        {/* --- Column 3: Products --- */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                Our Products
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>Forstaff</li>
                                <li>Akunta</li>
                                <li>RedPOS</li>
                            </ul>
                        </div>

                        {/* --- Column 4: Inquiry --- */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">Inquiry</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-red-500" />
                                    <a
                                    href="mailto:info@redgroup.co.id"
                                    className="hover:text-white transition"
                                    >
                                    info@redgroup.co.id
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-red-500" />
                                    <span>+62 811-3801-0808</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ======= OFFICE LOCATIONS ======= */}
                    <div className="border-t border-gray-700 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
                        <div>
                            <h4 className="text-white font-semibold mb-2">
                                R.E.D Group Main Office
                            </h4>
                            <p>
                                Jl. Ratna Denpasar No 868, Tonja, Kec. Denpasar Utara, Kota
                                Denpasar, Bali
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">
                                R.E.D Group Business Hub
                            </h4>
                            <p>
                                Jl. Tukad Aryan I No.1, Sanur, Denpasar Selatan, Kota Denpasar,
                                Bali
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-2">
                                R.E.D Group Business Point Canggu
                            </h4>
                            <p>
                                Pererenan Square No.990, Jl. Raya Canggu, Pererenan, Kec. Mengwi,
                                Kabupaten Badung, Bali
                            </p>
                        </div>
                    </div>

                    {/* ======= COPYRIGHT ======= */}
                    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} R.E.D Group. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer