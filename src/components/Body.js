import React, { useEffect, useRef, useState } from 'react';
import AboutUs from './AboutUs';
import DevelopmentCard from './DevelopmentCard';
import Portfolio from './Portfolio';
// import OurServices from './OurServices';
import OurClients from './OurClients';
import '../components-css/body.scss';
import gsap from 'gsap';
import Testimonial from './Testimonial';
import Blogs from './Blogs';
import Faq from './Faq';
import CaseStudy from './CaseStudy';

const Body = ({ onHeaderVisible }) => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const textAnimationsRef = useRef([]);
  const headerAnimationRef = useRef(null);
  // const whatsappButtonRef = useRef(null);
  const contactUsButtonRef = useRef(null);

  useEffect(() => {
    if (!animationStarted) {
      const textAnimations = textAnimationsRef.current;
      const headerAnimation = headerAnimationRef.current;
      setAnimationStarted(true); // Mark animation started
      gsap.fromTo(
        textAnimations,
        { y: '100%', opacity: 0 },
        {
          duration: 1.5,
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0,
          onComplete: () => {
            gsap.to(textAnimations[0], { duration: 1, x: -200, repeat: 0, yoyo: true });
            gsap.to(textAnimations[1], { duration: 1, x: 200, repeat: 0, yoyo: true });
            gsap.to(textAnimations, {
              opacity: 0,
              delay: 2.5,
              stagger: 0,
              onComplete: () => {
                onHeaderVisible(); // Notify the parent about header visibility
                textAnimations.forEach((text) => (text.style.display = 'none'));
                headerAnimation.style.display = 'block';
                gsap.fromTo(
                  headerAnimation,
                  { y: '100%', opacity: 0 },
                  { duration: 1, y: 0, opacity: 1, stagger: 0, ease: 'power2.out' }
                );
                // Bounce effect on buttons
                // gsap.fromTo(
                //   [whatsappButtonRef.current, contactUsButtonRef.current],
                //   { y: 20 },
                //   { duration: 1, y: 0, ease: 'bounce.out', stagger: 0.1 }
                // );
              },
            });
          },
        }
      );
    }
  }, [onHeaderVisible, animationStarted]);

  return (
    <div className="body-main-container">
      <div className="upper-heading">
        <div className="text-animation an1" ref={(el) => (textAnimationsRef.current[0] = el)}>
          WE
        </div>
        <div className="text-animation an2" ref={(el) => (textAnimationsRef.current[1] = el)}>
          CREATE
        </div>
        <div className="text-animation an3" ref={(el) => (textAnimationsRef.current[2] = el)}>
          DIGITAL
        </div>
        <div className="text-animation an4" ref={(el) => (textAnimationsRef.current[3] = el)}>
          _SOLUTIONS
        </div>
      </div>
      <div className="body-animation" style={{ display: 'none' }} ref={headerAnimationRef}>
        <span><b>ACCELERATE</b> YOUR </span>
        <span className='business'><span className="create">BUSINESS</span></span>
        <br />
        INTO THE <b>DIGITAL AGE</b>
      </div>
      <AboutUs />
      <DevelopmentCard />
      <Portfolio />
      <OurClients />
      <CaseStudy />
      <Testimonial />
      <Blogs />
      <Faq />
      {/* <OurServices /> */}
    </div>
  );
};

export default Body;