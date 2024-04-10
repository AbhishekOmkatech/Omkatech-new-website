import React from 'react'
import ISO from '../pngs/Group 43.png'
import companyLogo from '../pngs/01 logo.png'
import '../components-css/footer.scss'
const Footer = () => {
  return (
    <div className="footer-main-container">
        <div className="top-footer-part">
            <div>
            <img src={companyLogo} alt="company-logo" />
            <p>Full stack mobile (iOS, Android) and web app <br /> design and development agency.</p>
            </div>
            <img src={ISO} alt="iso-icon" />
        </div>
        <hr />
        <div className="bottom-footer-part">
            <p>Statutory legal information</p>
            <p>2024-2025 (c) Appinventive | SiteMap | Privacy Policy</p>
            <p>social icons</p>
        </div>
    </div>
  )
}

export default Footer