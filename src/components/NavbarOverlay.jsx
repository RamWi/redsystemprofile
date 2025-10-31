


function NavbarOverlay({ isOpen }){

    if (!isOpen) return null;

    return(
        <>
            {/* ==================== MOBILE MENU OVERLAY ==================== */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#0B141A] flex flex-col justify-center items-center text-center z-40 transition-all duration-300">


                    {/* MAIN MENU LINKS */}
                    <ul className="text-3xl font-light space-y-6">
                        <li className="link-nav cursor-pointer">Home</li>
                        <li className="link-nav cursor-pointer">About Us</li>
                        <li className="link-nav cursor-pointer">Work</li>
                        <li className="link-nav cursor-pointer">Contact</li>
                        <li className="link-nav cursor-pointer">Testimonials</li>
                        <li className="link-nav cursor-pointer">Article</li>
                        <li className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                            <a href="#" className="link-nav cursor-pointer">
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
                            
                        </li>
                    </ul>

                    {/* --- Dropdown Menu --- */}
                    {isDropdownOpen && (
                        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider text-gray-400">
                            <span className="link-nav cursor-pointer">Insights</span>
                            <span className="link-nav cursor-pointer">News</span>
                            <span className="link-nav cursor-pointer">Career</span>
                            <span className="link-nav cursor-pointer">Contact</span>
                        </div>
                    )}

                    {/* OPTIONAL SECONDARY LINKS */}
                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider text-gray-400">
                        <span className="link-nav cursor-pointer">Insights</span>
                        <span className="link-nav cursor-pointer">News</span>
                        <span className="link-nav cursor-pointer">Career</span>
                        <span className="link-nav cursor-pointer">Contact</span>
                    </div>
                </div>
            )}
    
        </>
    )
}

export default NavbarOverlay
