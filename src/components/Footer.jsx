import FooterBottom from "./FooterBottom";

import logo from "../assets/redsystem-logo-white.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer(){
    return (
        <>
            <footer className="bg-[#0B141A] text-gray-300 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* ======= TOP SECTION ======= */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-gray-700 pb-6">
                        {/* --- Column 1: Logo & Intro --- */}
                        <div>
                            <img src={logo} alt="R.E.D Group" className="w-40 mb-4" />
                            <p className="text-sm leading-relaxed text-gray-400">
                                We blend sharp compliance with creative strategy — and always with
                                a touch of Bali warmth.
                            </p>

                            <a href="https://maps.app.goo.gl/eFEUMqZKCdyxbk8r6" target="_blank">
                                
                                {/* Google Map */}
                                <div className="mt-6 w-full h-50 rounded-lg overflow-hidden border border-red-500/20 shadow-md">
                    
                                        <iframe 
                                        title="RED System Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.114228661268!2d115.24586217456857!3d-8.680686288389909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fae714de88b%3A0x7216cd57648a4f83!2sRED%20SYSTEM%20BALI%20WEBSITE%20DEVELOPER!5e0!3m2!1sid!2sid!4v1762748005573!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-2">
                                        RED System Office
                                    </h4>
                                    <p>
                                        RED SYSTEM Bali Website Developer, Jl. Tukad Anyar 1 No.1, Sanur, Denpasar Selatan, Kota Denpasar, Bali 80227
                                    </p>
                                </div>
                            </a>

                            <ul className="space-y-3 text-sm my-2">
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-red-500" />
                                    <a
                                    href="mailto:info@redsystem.id"
                                    className="hover:text-white transition"
                                    >
                                        info@redsystem.id
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-red-500" />
                                    <span>+62 811-3801-0808</span>
                                </li>
                            </ul>
                        </div>

                        {/* --- Column 2: Services --- */}
                        <div className="md:mx-10">
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                Our Services
                            </h3>
                            <ul className="space-y-2 text-sm w-fit">
                                <li className="link-nav"> <Link to="services/web">Website Development</Link> </li>
                                <li className="link-nav"><Link to="services/mobile">Mobile Apps Development</Link></li>
                                <li className="link-nav"> <Link to="services/erp">ERP Development</Link></li>
                                <li className="link-nav"> <Link to="services/itconsult">IT Consultation</Link></li>

                            </ul>
                        </div>

                        {/* --- Column 3: Products --- */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">
                                Our Products
                            </h3>
                            <ul className="space-y-2 text-sm w-fit">
                                <li className="link-nav"><a href="https://www.forstaff.id/" target="_blank">Forstaff</a></li>
                                <li className="link-nav"><a href="https://demo.akunta.co.id/" target="_blank">Akunta</a></li>
                                <li className="link-nav"><a href="https://api.whatsapp.com/send/?phone=6281228663080&text&type=phone_number&app_absent=0" target="_blank">RedPOS</a></li>
                            </ul>
                        </div>
                    </div>


                    {/* ======= COPYRIGHT ======= */}
                    <FooterBottom />
                </div>
            </footer>
        </>
    );
};

export default Footer