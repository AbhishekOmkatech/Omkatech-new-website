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
import { useNavigate } from 'react-router-dom';

const MySlider = () => {
    const navigate = useNavigate();
    const settings = {
        infinite: true,
        speed: 500,
        wheelControl: false,
        trimWhiteSpace: true,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        slidesToShow: 3.3,
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
                    focusOnSelect: true,
                    slidesToShow: 1.2, // Show 2 slides on phone
                },
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Replace with your image URLs
    const images = [
        {
            id: 1,
            image: image1
        },
        {
            id: 2,
            image: image2
        },
        {
            id: 3,
            image: image3
        },
        {
            id: 4,
            image: image1
        },
        {
            id: 5,
            image: image2
        },
        {
            id: 6,
            image: image3
        }
    ];

    return (
        <div>
            <Slider {...settings}>
                {images?.map((image, index) => (
                    <div className="portfolio-image-container" key={index}>
                        <img className="image" src={image.image} alt={`Slide ${index + 1}`} />
                        <button onClick={() => navigate(`/portfolio/${image.id}`)} className="hover-button">App Name</button>
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
