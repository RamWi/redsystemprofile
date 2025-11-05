// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroLand from './components/HeroLand'
import ServiceSection from './components/ServiceSection'
import OurProductLand from './components/OurProductLand'
import ClientLogoSection from './components/ClientLogoSection'
import PortoLand from './components/PortoLand'


function App() {


  return (
    <>        
      {/* Call Navbar component */}
      {/* <Navbar /> */}
      <Header />



      <main className="-mt-22">
        <HeroLand />
        <ServiceSection />
        <OurProductLand />
        <ClientLogoSection />
        <PortoLand />
      </main>

    </>
  )
}

export default App
