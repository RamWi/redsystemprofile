import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import Work from './pages/Work.jsx'
import Testimoni from './pages/Testimoni.jsx'
import PerService from './components/reuseable/PerService.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <About /> */}
    {/* <Work /> */}
    {/* <Testimoni /> */}
    {/* <PerService /> */}
  </StrictMode>,
)
