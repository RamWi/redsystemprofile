import React, { useState } from "react";

function Navbar(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);    

    return(
        <>
            
            {/* CENTER/RIGHT: DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex ml-auto mr-5 space-x-10 text-sm uppercase tracking-wide text-gray-300">
                <a href="#contact" className="link-nav">
                Contact
                </a>

                {/* --- Services Dropdown Wrapper --- */}
                <div className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                {/* Main Services Link */}
                <a href="#services" className="link-nav flex justify-center items-center gap-1">
                    Services
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : "rotate-0"
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

                {/* --- Dropdown Menu --- */}
                {isDropdownOpen && (
                    <div className={`absolute left-0 top-full mt-[20px] w-48 bg-[#0B141A]/95 backdrop-blur-md rounded-md shadow-lg border border-gray-700 
                        text-gray-300 transition-all duration-300 origin-top transform z-50
                        ${
                            isDropdownOpen
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                        >
                
                        {/* invisible hover bridge (prevents flicker) */}
                        <div className="absolute -top-[20px] left-0 w-full h-[20px] bg-transparent"></div>

                        <a
                            href="#web"
                            className="block flex justify-center items-center h-15 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200"
                        >
                            Website Development
                        </a>
                    
                        <a
                            href="#mobile"
                            className="block flex justify-center items-center h-15 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200"
                        >
                            Mobile Apps Development
                        </a>
                    
                        <a
                            href="#uiux"
                            className="block flex items-center h-15 px-4 py-2  hover:bg-white/10 hover:text-white transition-all duration-200"
                        >
                            ERP Develpoment
                        </a>

                        <a
                            href="#uiux"
                            className="block flex items-center h-15 px-4 py-2 hover:bg-white/10 hover:text-white transition-all duration-200"
                        >
                            IT Consultation
                        </a>
                        
                    </div>
                    )}
                </div>

                <a href="#work" className="link-nav">
                    Work
                </a>
                
            </nav>
            
        </>
    )
}

export default Navbar