import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import viteLogo from '/vite.svg'
import './App.css';

import Home from "./pages/Home";
import About from "./pages/about";
import Work from "./pages/Work";
import Testimoni from "./pages/Testimoni";
import PerService from "./components/reuseable/PerService";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap kali pathname berubah
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Tidak menampilkan apa-apa
}


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testi" element={<Testimoni />} />
        <Route path="/services/:id" element={<PerService />} />
      </Routes>
    </Router>
    
  )
}


export default App
