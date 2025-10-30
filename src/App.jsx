// import { useState } from 'react'

// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Header from './components/Header'


function App() {


  return (
    <>        
      {/* Call Navbar component */}
      {/* <Navbar /> */}
      <Header />



      <main className="-mt-22 h-[1000px] flex justify-center items-center text-gray-600 bg-amber-200">
        <h1 className='text-red-600'>Build Here</h1>
        <p className="text-gray-500">Page content will go here...</p>
      </main>

    </>
  )
}

export default App
