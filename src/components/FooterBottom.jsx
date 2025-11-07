import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa";

function FooterBottom({className}){
    return(
        <>

            <div className={`w-full grid justify-center md:flex md:justify-between ${className}`}>

                <div className="grid md:flex mb-3 justify-start items-start text-sm">
                    © {new Date().getFullYear()} R.E.D Group. All Rights Reserved.
                </div>

                <div className="flex justify-end items-end gap-8 mb-6 text-gray-400">
                    {/* ======= COPYRIGHT ======= */}    
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

           

           
        
        </>
    )
}

export default FooterBottom