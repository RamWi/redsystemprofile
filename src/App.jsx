// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroLand from './components/HeroLand'
import ServiceSection from './components/ServiceSection'
import OurProductLand from './components/OurProductLand'


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
        
      </main>

    </>
  )
}

export default App
