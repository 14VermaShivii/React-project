import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {faPhone } from "@fortawesome/fontawesome-free"
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free"
import './App.css'
import { Home } from './Component/Pages/Home';
import { About } from './Component/Pages/About';
import { Contact } from './Component/Pages/Contact';
import { Header } from './Component/Shared/Header';
import { Footer } from './Component/Shared/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
