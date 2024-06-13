import React, { useState } from 'react';
import ISO1 from '../pngs/iso-1.png';
import ISO2 from '../pngs/iso-2.png';
import companyLogo from '../pngs/hd-logo.png';
import India from '../pngs/india (2).png';
import Usa from '../pngs/united-states-of-america.png';
import Canada from '../pngs/canada (1).png';
import facebook from '../assets/svgs/Group 44.svg'
import linkedin from '../assets/svgs/Group 48.svg'
import instagram from '../assets/svgs/Group 49.svg'
import twitter from '../assets/svgs/Group 50.svg'
import ConsultWithOmkatech from '../components/ConsultWithOmkatech'
import '../components-css/footer.scss';

const Footer = () => {
  const [hoveredFlag, setHoveredFlag] = useState('usa');

  const handleMouseEnter = (flag) => {
    setHoveredFlag(flag);
  };

  const handleMouseLeave = () => {
    setHoveredFlag(null);
    setHoveredFlag('usa');
  };

  return (
    <div className="footer-main-container">
      <div className='bg-img'>
        <ConsultWithOmkatech />
        <div className="middle-footer-part">
          <div className='about-company'>
            <img src={companyLogo} alt="company-logo" />
            <p>Full stack mobile (iOS, Android) and web app design and development agency.</p>
          </div>
          <div className="country">
            <img className={hoveredFlag === 'india' ? 'flag-hovered' : ''} src={India} alt="india-flag" onMouseEnter={() => handleMouseEnter('india')} onMouseLeave={handleMouseLeave} />
            <img className={hoveredFlag === 'usa' ? 'flag-hovered' : ''} src={Usa} alt="usa-flag" onMouseEnter={() => handleMouseEnter('usa')} onMouseLeave={handleMouseLeave} />
            <img className={hoveredFlag === 'canada' ? 'flag-hovered' : ''} src={Canada} alt="canada-flag" onMouseEnter={() => handleMouseEnter('canada')} onMouseLeave={handleMouseLeave} />
            <div className="text">
              {hoveredFlag === 'india' && <span>Sec - 63, Noida India</span>}
              {hoveredFlag === 'usa' && <span>Dallas, TX, USA</span>}
              {hoveredFlag === 'canada' && <span>Mississauga, ON, Canada</span>}
            </div>
          </div>
          <div className="iso">
            <img src={ISO1} alt="iso-icon" />
            <img src={ISO2} alt="iso-icon" />
          </div>
          <div className="statutory-info">
            <p>Statutory legal information</p>
            <p>
              <img src={facebook} alt="facebook-icon" />
              <img src={linkedin} alt="linkedin-icon" />
              <img src={instagram} alt="instagram-icon" />
              <img src={twitter} alt="twitter-icon" />
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-footer-part">
        <p className='none'>Statutory legal information</p>
        <p>2024-2025 (c) Omkatech | SiteMap | Privacy Policy</p>
        <p className='none'>
          <a href="https://www.facebook.com/omkatech" target='blank'><img src={facebook} alt="facebook-icon" /></a>
          <a href="https://www.linkedin.com/company/omkatech/" target='blank'><img src={linkedin} alt="linkedin-icon" /></a>
          <a href="https://www.instagram.com/omkatech" target='blank'><img src={instagram} alt="instagram-icon" /></a>
          <a href="https://twitter.com/omka_tech" target='blank'><img src={twitter} alt="twitter-icon" /></a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
