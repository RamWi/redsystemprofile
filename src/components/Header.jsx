import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import icons for hamburger (Menu) and close (X)
import { Menu, X } from "lucide-react";
import logo from "../assets/redsystem-logo-white.png";
import Navbar from "./Navbar";
import NavbarOverlay from "./NavbarOverlay";

function Header(){

    const [isOpen, setIsOpen] = useState(false);

      // Track whether the user has scrolled down
    const [isScrolled, setIsScrolled] = useState(false);


    // useEffect runs once when the component loads
    useEffect(() => {
        // Function to check scroll position
        const handleScroll = () => {
            if (window.scrollY > 30) {
                // If user scrolls more than 30px, set true
                setIsScrolled(true);
            } else {
                // Otherwise, keep navbar transparent
                setIsScrolled(false);
            }
        };

        // Listen to the scroll event
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
            <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 
                ${isScrolled ? "bg-[#0B141A]/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <div className="flex justify-between items-center px-6 md:px-16 py-4">
                
                    {/* LEFT: LOGO */}
                    <Link to="/">
                        <img src={logo} alt="Red System Logo" className="" />
                    </Link>

                    {/* CENTER/RIGHT: DESKTOP NAVIGATION LINKS */}
                    <Navbar />

                    {/* RIGHT: MOBILE MENU BUTTON (HAMBURGER ICON) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
                        className={`md:link-nav ${isScrolled}`}  
                    >
                        {/* Conditional icon rendering:
                            If menu is open → show X icon
                            If menu is closed → show hamburger icon */}
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </header>

            {/* ==================== MOBILE MENU OVERLAY ==================== */}
            <NavbarOverlay isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default Header