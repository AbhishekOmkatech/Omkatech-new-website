import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Logo from '../pngs/omkatech-logo.png';
import CrossIcon from '../assets/svgs/cross.svg';
import MenuBar from '../assets/svgs/Group 3.svg';
import '../components-css/header.scss';
import { Link } from "react-router-dom";

const Header = () => {
  const [handleArrowClick, setHandleArrowClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const arrowIcon = document.querySelector('.arrow-icon');

    const arrowAnimation = gsap.to(arrowIcon, {
      rotation: handleArrowClick ? -45 : 0,
      duration: 0.3,
      ease: 'power2.inOut'
    });

    return () => {
      arrowAnimation.kill(); // Clean up the animation
    };
  }, [handleArrowClick]);

  useEffect(() => {
    // Animate sidebar initially if it's open
    animateSidebar(isSidebarOpen);
  }, [isSidebarOpen]);

  const handleClick = () => {
    setHandleArrowClick(!handleArrowClick);
    setIsSidebarOpen(!isSidebarOpen);
    
  };

  const handleCloseClick = () => {
    setIsSidebarOpen(false);
    setHandleArrowClick(!handleArrowClick);
  };

  const animateSidebar = (open) => {
    const sidebar = document.querySelector('.sidebar');
    if (open) {
      gsap.to(sidebar, { duration: 0.3, right: 576, ease: 'power2.inOut' });
    } else {
      gsap.to(sidebar, { duration: 0.3, right: 0, ease: 'power2.inOut' });
    }
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="header-main-container">
      <div className="header">
        <div className="company-logo">
          <Link to="/"><img src={Logo} alt="company-logo" /></Link>
          <div><span>ISO : 9001 : 2015</span></div>
        </div>
        <div className="free-consultation" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          <span>Menu</span>
          <div className={`arrow-icon-main ${isHovered ? 'hovered' : ''}`} onClick={handleClick}>
            <img className={`arrow-icon ${handleArrowClick ? 'rotated' : ''}`} src={MenuBar} alt="menu-bar-icon" />
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={handleCloseClick}></div>
          <div className="sidebar">
            <div className="close-icon" onClick={handleCloseClick}>
              <img src={CrossIcon} alt="cross-icon" />
            </div>
            <ul>
              <li className='home'>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>CASE STUDY</li>
              <li>PORTFOLIO</li>
              <li>OUR CLIENTS</li>
              <li>TESTIMONIAL</li>
              <Link className='blogs' onClick={handleCloseClick} to="blogs"><li>BLOGS</li></Link>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;