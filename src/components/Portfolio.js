import React, { useState } from 'react';
import '../components-css/portfolio.scss';
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import SliderSlick from '../components/Slider'
import { Link } from "react-router-dom";

const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="slider-container">
      <div className="portfolio">
        <h1>PORTFOLIO</h1>
        <div className="button">
          <button onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link className='portfolio-page' to="portfolio"><span>PORTFOLIO</span></Link><span className='img'>
              {isHovered ? (
                <img src={GradientArrowIcon} alt="gradient-icon" />
              ) : (
                <img src={ArrowIcon} alt="arrow-icon" />
              )}
            </span>
          </button>
        </div>
      </div>
        <SliderSlick />
    </div>
  );
};

export default Slider;
{/* <div className="slider-buttons">
<div className="slider-button" onClick={prevSlide}><img src={leftArrow} alt="left-arrow-icon" /></div>
<div className="slider-button" onClick={nextSlide}><img src={rightArrow} alt="right-arrow-icon" /></div> */} 