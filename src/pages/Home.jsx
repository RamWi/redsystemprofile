import Header from '../components/Header';
import HeroSection from '../components/reuseable/HeroSection';
import ServicesSection from '../components/ServiceSection';
import OurProductLand from '../components/OurProductLand.jsx';
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
                    title="Solusi Digital Masa Depan"
                    subtitle="Kami mengubah ide Anda menjadi aplikasi web dan mobile yang powerful. Software house terpercaya dengan tim developer berpengalaman."
                    textPosition="left"
                    buttonPrimary={{ text: "Mulai Project", link: "#project" }}
                    buttonSecondary={{ text: "Lihat Portfolio", link: "#portfolio" }}
                />
                <ServicesSection />
                <OurProductLand />
                <ClientLogoSection />
                <PortoLand />
                <TestimonialsLand />
            </main>

            <Footer />

        </>
    )
}

export default Home