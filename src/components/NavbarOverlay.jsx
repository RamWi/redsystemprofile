


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
                        <li className="link-nav cursor-pointer">About</li>
                        <li className="link-nav cursor-pointer">Work</li>
                    </ul>

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
