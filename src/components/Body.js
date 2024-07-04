import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutUs from './AboutUs';
import DevelopmentCard from './DevelopmentCard';
import Portfolio from './Portfolio';
import OurClients from './OurClients';
// import banner from '../pngs/banner.mp4'
import Blogs from './Blogs';
import Faq from './Faq';
import CaseStudy from './CaseStudy';
// import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import Loader from './loader'; // Make sure the loader component exists
import Logo from '../pngs/omkatech-logo.png';
import '../components-css/body.scss';
import Header from './Header';
import axios from 'axios';
// import ConsultWithOmkatech from './ConsultWithOmkatech';

const Body = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [servicesData, setServicesData] = useState(null)
  const [brandsData, setBrandsData] = useState(null)
  const [faqData, setFaqData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [testimonialData, setTestimonialData] = useState(null)
  const [blogsData, setBlogsData] = useState(null)

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        const response = await axios.get('https://newomkatech.omkatech.in/api/GetHomeData');
        setAboutUsData(response?.data?.data?.aboutus);
        setServicesData(response?.data?.data?.service)
        setBrandsData(response?.data?.data?.brand)
        setFaqData(response?.data?.data?.faq)
        setTestimonialData(response?.data?.data?.testimonial)
        setBlogsData(response?.data?.data?.Blog)
        console.log('response', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomePageData();
  }, []);

  return (
    <div className={`body-main-container ${loading ? 'loading' : ''}`}>
      {/* <video src={banner} autoPlay muted controls>
        Your browser does not support the video tag.
      </video> */}
      <Header />
      {loading ? (
        <Loader /> // Display the loader while fetching data
      ) : (
        <>
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
          <AboutUs aboutUsData={aboutUsData} />
          <DevelopmentCard servicesData={servicesData} />
          <Portfolio />
          {/* <ContactUs /> */}
          <OurClients brandsData={brandsData} />
          <CaseStudy />
          <Testimonial testimonialData={testimonialData} />
          <Blogs blogsData={blogsData} />
          <Faq faqData={faqData} />
          {/* <ConsultWithOmkatech /> */}
        </>
      )}
    </div>
  );
};

export default Body;
