import React, { useState } from 'react';
import Logo from '../pngs/hd-logo.png';
import CrossIcon from '../assets/svgs/cross.svg';
import MenuBar from '../assets/svgs/Group 3.svg';
import '../components-css/header.scss';
import { Link, useLocation } from "react-router-dom";
import SmallArrowDown from '../assets/svgs/Group 6.svg';
import OrangeSmallArrowDown from '../assets/svgs/Vector (2).svg'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAboutSubmenu, setShowAboutSubmenu] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="header-main-container" >
      <div className="header">
        <div className="company-logo">
          <Link to="/"><img src={Logo} alt="company-logo" /></Link>
        </div>
        <div className="free-consultation">
          <span>Menu</span>
          <div className="arrow-icon-main" onClick={handleClick}>
            <img className={`arrow-icon ${isSidebarOpen ? 'rotated' : ''}`} src={MenuBar} alt="menu-bar-icon" />
          </div>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={handleClick}>
          <img src={CrossIcon} alt="cross-icon" />
        </div>
        <ul>
          <Link className='home' onClick={handleClick} to="/"><li className={ pathname === '/' ? 'activeColor' : ''}>HOME</li></Link>
          <li className={`about-us ${showAboutSubmenu ? 'clicked' : ''}`} onClick={() => { setShowAboutSubmenu(!showAboutSubmenu) }}>
            ABOUT US
            <span>
              {showAboutSubmenu ?
                <img src={OrangeSmallArrowDown} alt="arrow-icon" /> :
                <img src={SmallArrowDown} alt="arrow-icon" />
              }
            </span>
          </li>            
          {showAboutSubmenu && <div className='about-us-submenu'>
          <Link className='about-us' onClick={handleClick} to="about-us"><p className={ pathname === '/about-us' ? 'activeColor' : ''}>ABOUT OMKATECH</p></Link>
          <Link className='career' onClick={handleClick} to="career"><p className={ pathname === '/career' ? 'activeColor' : ''}>CAREER</p></Link>
            <Link className='our-clients' onClick={handleClick} to="our-clients"><p className={ pathname === '/our-clients' ? 'activeColor' : ''}>OUR CLIENTS</p></Link>
            <Link className='our-testimonials' onClick={handleClick} to="our-testimonials"><p className={ pathname === '/our-testimonials' ? 'activeColor' : ''}>OUR TESTIMONIAL</p></Link>
            <p>CERTIFICATION</p>
          </div>}
          <li>SERVICES <span><img src={SmallArrowDown} alt="arrow-icon" /></span></li>
          <Link className='casestudy-page' onClick={handleClick} to="case-study"><li className={ pathname === '/case-study' ? 'activeColor' : ''}>CASE STUDY</li></Link>
          <Link className='portfolio-page' onClick={handleClick} to="portfolio"><li className={ pathname === '/portfolio' ? 'activeColor' : ''}>PORTFOLIO</li></Link>
          <li>HIRE RESOURCES</li>
          {/* <Link className='our-team' onClick={handleClick} to="our-team"><li>OUR TEAM</li></Link> */}
          {/* <Link className='our-testimonials' onClick={handleClick} to="our-testimonials"><li>OUR TESTIMONIAL</li></Link> */}
          <Link className='blogs' onClick={handleClick} to="blogs"><li className={ pathname === '/blogs' ? 'activeColor' : ''}>BLOGS</li></Link>
          <Link className='contact-us' onClick={handleClick} to="contact-us"><li className={ pathname === '/contact-us' ? 'activeColor' : ''}>CONTACT US</li></Link>
        </ul>
      </div>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={handleClick}></div>}
    </div>
  );
};

export default Header;
