
function Navbar(){


    return(
        <>
            
            {/* CENTER/RIGHT: DESKTOP NAVIGATION LINKS */}
            <nav className="hidden md:flex ml-auto mr-5 space-x-10 text-sm uppercase tracking-wide text-gray-300">
                <a href="#contact" className="link-nav">Contact</a>
                <a href="#services" className="link-nav">Services</a>
                <a href="#work" className="link-nav">Work</a>
            </nav>
            
        </>
    )
}

export default Navbar