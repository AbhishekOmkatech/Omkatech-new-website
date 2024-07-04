import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components-css/portfolio.scss';  // Import your CSS file
import image1 from '../pngs/Mask group (1).png';
import image2 from '../pngs/Mask group.png';
import image3 from '../pngs/Rectangle 32.png';
import leftArrow from '../assets/svgs/Vector.svg';
import rightArrow from '../assets/svgs/Vector (1).svg';

const MySlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        wheelControl: false,
        trimWhiteSpace: true,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 3.5, // Show 3 slides on tablet
                },
            },
            {
                breakpoint: 767, // Phone breakpoint
                settings: {
                    slidesToShow: 2, // Show 2 slides on phone
                },
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Replace with your image URLs
    const images = [
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
    ];

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="portfolio-image-container" key={index}>
                        <img className="image" src={image} alt={`Slide ${index + 1}`} />
                        <button className="hover-button">App Name</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slider-buttons">
            <div className="slider-button-left" onClick={onClick}><img src={leftArrow} alt="left-arrow-icon" /></div>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slider-buttons">
            <div className="slider-button-right" onClick={onClick}><img src={rightArrow} alt="right-arrow-icon" /></div>
        </div>
    );
};

export default MySlider;
