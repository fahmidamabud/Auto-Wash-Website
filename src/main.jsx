import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Locations from './components/Locations.jsx'
import Teams from './components/Teams.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <About />
    <Services />
    <Pricing />
    <Locations />
    <Teams />
    <Testimonials />
    <Footer />
  </BrowserRouter>,
)
