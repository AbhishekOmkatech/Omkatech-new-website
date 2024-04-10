import React, { useState } from 'react';
import gsap from 'gsap';
import robotImg from '../pngs/01-01 1.png';
import rightArrowBlack from '../assets/svgs/Group 3 (1).svg';
import rightArrowWhite from '../assets/svgs/Group 3 (2).svg';
import '../components-css/blogs.scss';

const Blogs = () => {
  const [showImage, setShowImage] = useState(false);

  const handleHover = () => {
    setShowImage(true);
    gsap.fromTo('.image-overlay', { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    setShowImage(false);
    gsap.to('.image-overlay', { opacity: 0, scaleY: 0, duration: 0.3 });
  };

  return (
    <div className="blogs-main-container">
      <h2>Blogs</h2>
      <div className="cards">
        <div className="large-card">
          <p className="date">MAR 14,2024</p>
          <div className="content">
            <h4>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h4>
            <p>
              Technological evolution has come a long way! The proposition that task could be automated with just a few
              lines of.... <br />
              <br /> Technological evolution has come a long way! The proposition that task could be automated with just
              a few lines of.... <br />
              <br /> Technological evolution has come a long way! The proposition that task could be automated with just
              a few lines of.... <br />
              <br /> Technological evolution has come a long way! The proposition that task could be automated with just
              a few lines of.... <br />
              <br /> Technological evolution has come a long way! The proposition that task could be automated with just
              a few lines of.... Technological evolution has come a long way!
            </p>
            <span>
              <img src={rightArrowBlack} alt="right-arrow-icon" />
            </span>
          </div>
        </div>
        <div className="small-cards">
          <div className="card">
            <p className="date">MAR 14,2024</p>
            <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="content">
              <h4>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h4>
              {showImage && <div><img src={robotImg} className="image-overlay" alt="img-icon" /></div>}
              <p>
                Technological evolution has come a long way! The proposition that task could be automated with just a
                few lines of....
              </p>
              <span>
                <img src={rightArrowWhite} alt="right-arrow-icon" />
              </span>
            </div>
          </div>
          <div className="card">
            <p className="date">MAR 14,2024</p>
            <div className="content">
              <h4>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h4>
              <p>Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... </p>
              <span><img src={rightArrowWhite} alt="right-arrow-icon" /></span>
            </div>
          </div>
          <div className="card">
            <p className="date">MAR 14,2024</p>
            <div className="content">
              <h4>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h4>
              <p>Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... </p>
              <span><img src={rightArrowWhite} alt="right-arrow-icon" /></span>
            </div>
          </div>
          <div className="card">
            <p className="date">MAR 14,2024</p>
            <div className="content">
              <h4>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h4>
              <p>Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... </p>
              <span><img src={rightArrowWhite} alt="right-arrow-icon" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;