import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AboutUs from './AboutUs';
import DevelopmentCard from './DevelopmentCard';
import Portfolio from './Portfolio';
import OurClients from './OurClients';
import Blogs from './Blogs';
import Faq from './Faq';
import CaseStudy from './CaseStudy';
// import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import Loader from './loader'
import Logo from '../pngs/omkatech-logo.png';
import '../components-css/body.scss';
import Header from './Header';
// import ConsultWithOmkatech from './ConsultWithOmkatech';

const Body = ({  }) => {
  return (
    <div className="body-main-container">
      <Header />
      {(
        <motion.div className="body-animation">
          <motion.span
            className="animated-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <b>ACCELERATE</b> YOUR
          </motion.span>
          <br />
          <motion.span
            className="animated-text business"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="create"><b>BUSINESS</b></span>
          </motion.span>
          <br />
          <motion.span
            className="animated-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            INTO THE <b>DIGITAL AGE</b>
          </motion.span>
        </motion.div>
      )}
      {<>
        <AboutUs />
        <DevelopmentCard />
        <Portfolio />
        {/* <ContactUs /> */}
        <OurClients />
        <CaseStudy />
        <Testimonial />
        <Blogs />
        <Faq />
        {/* <ConsultWithOmkatech /> */}
      </>}
    </div>
  );
};

export default Body;
