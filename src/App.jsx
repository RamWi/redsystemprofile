// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header';
import HeroLand from './components/HeroLand';
import ServiceSection from './components/ServiceSection';
import OurProductLand from './components/OurProductLand';
import ClientLogoSection from './components/ClientLogoSection';
import PortoLand from './components/PortoLand';
import TestimonialsLand from './components/TestimonialsLand';
import Footer from './components/Footer';


function App() {


  return (
    <>        
      {/* Call Navbar component */}
      <Header />



      <main className="-mt-22">
        <HeroLand />
        <ServiceSection />
        <OurProductLand />
        <ClientLogoSection />
        <PortoLand />
        <TestimonialsLand />
      </main>

      <Footer />

    </>
  )
}

export default App
