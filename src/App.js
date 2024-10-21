import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import BlogsPage from './pages/BlogsPage';
import { Link } from "react-router-dom";
import './App.css';
import ContactUs from './pages/ContactUsPage';
import Logo from './pngs/hd-logo.png'; // Import your logo image
import Loader from './components/loader'; // Import your Loader component
import PortfolioPage from './pages/PortfolioPage';
import { useLocation } from 'react-router-dom';
import SingleBlogPage from './pages/SingleBlogPage';
import CaseStudyPage from './pages/CaseStudyPage';
import OurTeam from './pages/OurTeam';
import OurClients from './pages/OurClientsPage';
import OurTestimonialPage from './pages/OurTestimonialPage';
import AboutOmkatech from './pages/AboutOmkatech';
import CarrerPage from './pages/CarrerPage';
import SinglePortfolioPage from './pages/SinglePortfolioPage';
import HireResource from './pages/HireResource';
import SingleCasestudyPage from './pages/SingleCasestudyPage';
import ServicePage from './pages/ServicePage';
import CertificatePage from './pages/CertificatePage';

const App = () => {
  // const [logoVisible, setLogoVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const textControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setLogoVisible(false);
      setIsHeaderVisible(false); // Notify the parent about header visibility
      animateText();
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const animateText = async () => {
    await textControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]); // Trigger scroll effect when the pathname changes

  return (
    <div className="main-container">
      {/* {logoVisible && (
        <div className="loader-screen">
          <img src={Logo} className='logo' alt="logo-img" />
          <Loader />
        </div>
      )} */}
     <>
     {/* {!logoVisible && <div> */}
     {<div>
     { location.pathname != '/' && <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<SinglePortfolioPage />} />
        <Route path="case-study" element={<CaseStudyPage />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/our-testimonials" element={<OurTestimonialPage />} />
        <Route path="/about-us" element={<AboutOmkatech />} />
        <Route path="/career" element={<CarrerPage />} />
        <Route path="/hire-resources" element={<HireResource />} />
        <Route path="/case-study/:id" element={<SingleCasestudyPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/certifications" element={<CertificatePage />} />
      </Routes>      
      {!isHeaderVisible && <Footer />}
      {/* WhatsApp and Contact Us buttons */}
      <div className="contact-buttons">
        <a href="https://api.whatsapp.com/send?phone=+1 (786) 648-2910&text=Hello,Team OmkaTech" target="_blank"><button className="whatsapp-button">WHATSAPP</button></a>
        <Link className='contact-us' to="contact-us"><button className="contact-us-button">CONTACT US</button></Link>
      </div>
      </div>}
     </>
    </div>
  );
};

export default App;
