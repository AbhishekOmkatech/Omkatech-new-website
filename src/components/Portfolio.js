import React, { useState } from 'react';
import '../components-css/portfolio.scss';
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import leftArrow from '../assets/svgs/Vector.svg';
import rightArrow from '../assets/svgs/Vector (1).svg';
import image1 from '../pngs/Mask group (1).png';
import image2 from '../pngs/Mask group.png';
import image3 from '../pngs/Rectangle 32.png';
import image4 from '../pngs/Rectangle 33.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleImages, setVisibleImages] = useState([image1, image2, image3, image4]);
  const images = [image1, image2, image3, image4, image1, image2, image3]; // Repeating images for seamless sliding effect

  const nextSlide = () => {
    if (currentIndex < images.length - 4) {
      const nextIndex = currentIndex + 1;
      setVisibleImages(images.slice(nextIndex, nextIndex + 4));
      setCurrentIndex(nextIndex);
    } else {
      // If we're at the end of the images array, loop back to the beginning
      setVisibleImages(images.slice(0, 4));
      setCurrentIndex(0);
    }
    handleSlideChange();
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setVisibleImages(images.slice(prevIndex, prevIndex + 4));
      setCurrentIndex(prevIndex);
    } else {
      // If we're at the beginning of the images array, loop to the end
      const lastIndex = images.length - 4;
      setVisibleImages(images.slice(lastIndex, lastIndex + 4));
      setCurrentIndex(lastIndex);
    }
    handleSlideChange();
  };

  const handleSlideChange = () => {
    const slider = document.querySelector('.slider');
    slider.classList.remove('slide-animation');
    void slider.offsetWidth; // Trigger reflow to restart animation
    slider.classList.add('slide-animation');
  };

  return (
    <div className="slider-container">
      <div className="case-study">
        <h1>Portfolio</h1>
        <div className="button">
          <button onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <span>PORTFOLIO</span> <span className='img'>
              {isHovered ? (
                <img src={GradientArrowIcon} alt="gradient-icon" />
              ) : (
                <img src={ArrowIcon} alt="arrow-icon" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="slider">
        {/* Render visibleImages instead of all images */}
        {visibleImages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${currentIndex + index + 1} of ${visibleImages.length}`} />
        ))}
      </div>
      <div className="slider-buttons">
        <div className="slider-button" onClick={prevSlide}><img src={leftArrow} alt="left-arrow-icon" /></div>
        <div className="slider-button" onClick={nextSlide}><img src={rightArrow} alt="right-arrow-icon" /></div>
      </div>
    </div>
  );
};

export default Slider;