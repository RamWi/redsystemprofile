import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import viteLogo from '/vite.svg'
import './App.css';

import Home from "./pages/Home";
import PerService from "./components/reuseable/PerService";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<PerService />} />
      </Routes>
    </Router>
    
  )
}

export default App
