import React, { useState } from 'react';
import Logo from '../pngs/omkatech-logo.png';
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
          <div><span>ISO : 9001 : 2015</span></div>
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
          <Link className='home' onClick={handleClick} to="/"><li>Home</li></Link>
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
            <p>ABOUT OMKATECH</p>
            <p>CAREER</p>
            <Link className='our-team' onClick={handleClick} to="our-team"><p>OUR TEAM</p></Link>
            <p>CERTIFICATION</p>
          </div>}
          <li>SERVICES <span><img src={SmallArrowDown} alt="arrow-icon" /></span></li>
          <Link className='casestudy-page' onClick={handleClick} to="case-study"><li>CASE STUDY</li></Link>
          <Link className='portfolio-page' onClick={handleClick} to="portfolio"><li>PORTFOLIO</li></Link>
          <Link className='our-clients' onClick={handleClick} to="our-clients"><li>OUR CLIENTS</li></Link>
          <Link className='our-testimonials' onClick={handleClick} to="our-testimonials"><li>OUR TESTIMONIAL</li></Link>
          <Link className='blogs' onClick={handleClick} to="blogs"><li>BLOGS</li></Link>
        </ul>
      </div>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={handleClick}></div>}
    </div>
  );
};

export default Header;
