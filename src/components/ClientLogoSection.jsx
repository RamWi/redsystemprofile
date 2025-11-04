import Marquee from "react-fast-marquee";
import logokutus from "../assets/kutus-logo.png";
import logosurya from "../assets/suryahusadha-logo-768x102.png";
import logogood from "../assets/goodponsel-icon.png";
import logoGK18 from "../assets/graha-logo.png";
import logocakes from "../assets/oris-logo.png";


function ClientLogoSection(){

    const logos = [
        {
            logo: logokutus,
            size: "h-25"
        },
        {
            logo: logosurya,
            size: "h-16"
        },
        {
            logo: logogood,
            size: "h-16",
        },
        {
            logo: logoGK18,
            size: "h-25"
        },
        {
            logo: logocakes,
            size: "h-25"
        }

    ];

    return(
        <>
            <section className="relative w-full bg-[#0B141A] py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                    {/* Left Text */}
                    <div className="md:w-1/3 text-center md:text-left">
                        <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                            We work with various top-tier brands <br /> and industry leaders.
                        </h3>
                    </div>

                    {/* Right: Marquee container */}
                    <div className="md:w-2/3 overflow-hidden relative">
                        <div className="flex items-center space-x-16 animate-marquee">
                            {/* Duplikasi logo agar efek looping mulus */}
                            <Marquee gradient={false} speed={60}>
                                {logos.map((logo, index) => (
                                    <img
                                    key={index}
                                    src={logo.logo}
                                    alt={`partner-${index}`}
                                    className={`${logo.size} mx-8 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300`}
                                    />
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>

                {/* Gradient fade kanan & kiri biar elegan */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0B141A] via-[#0B141A]/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0B141A] via-[#0B141A]/80 to-transparent pointer-events-none" />
            </section>
        </>
    )
}

export default ClientLogoSection