// main component
import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import BlogsPage from './pages/BlogsPage'
import './App.css'

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleHeaderVisibility = () => {
    setIsHeaderVisible(false);
  };
  return (
    <div class="main-container">
      {!isHeaderVisible && <Header />}
      <Routes>
        <Route path="/" element={<Body setHeaderVisible={setIsHeaderVisible} onHeaderVisible={handleHeaderVisibility} />} />
        <Route path="blogs" element={<BlogsPage />} />
      </Routes>      
      <Footer />
      {/* WhatsApp and Contact Us buttons */}
      <div className="contact-buttons">
        <a href="https://api.whatsapp.com/send?phone=+1 (786) 648-2910&text=Hello,Team OmkaTech" target="_blank"><button className="whatsapp-button">WHATSAPP</button></a>
        <button className="contact-us-button"><span>CONTACTUS</span></button>
      </div>
    </div>
  )
}

export default App