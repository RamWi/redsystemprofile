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
                        href="https://www.instagram.com/red.system/?hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                    >
                        <FaInstagram size={24} />
                    </a>

                    <a
                        href="https://api.whatsapp.com/send/?phone=6281228663080&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition-all duration-300 transform hover:scale-110"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    <a
                        href="https://id.linkedin.com/company/redsystemid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    <a
                        href="https://facebook.com/redsystem.id/"
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