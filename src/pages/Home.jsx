import Header from '../components/Header';
import HeroSection from '../components/reuseable/HeroSection';
import ServicesSection from '../components/ServiceSection';
import OurProduct from '../components/OurProductLand.jsx';
import ClientLogoSection from '../components/ClientLogoSection';
import PortoLand from '../components/PortoLand';
import TestimonialsLand from '../components/TestimonialsLand';
import Footer from '../components/Footer';

import Hero from "../assets/hero-bg.jpg";

function Home(){
    return(
        <>
            {/* Call Navbar component */}
            <Header />


            <main className="-mt-22">
                <HeroSection 
                    background={Hero}
                    title="RED SYSTEM"
                    subtitle="TOP SOFTWARE DEVELOPER PARTNER TO REACH MORE POTENTIAL CUSTOMERS ONLINE."
                    textPosition="left"
                    buttonPrimary={{ text: "Let's Talk", link: "https://api.whatsapp.com/send/?phone=6281228663080&text&type=phone_number&app_absent=0" }}
                    buttonSecondary={{ text: "Lihat Portfolio", link: "porto" }}
                />
                <ServicesSection />
                <OurProduct />
                <ClientLogoSection />
                <PortoLand />
                <TestimonialsLand />
            </main>

            <Footer />

        </>
    )
}

export default Home