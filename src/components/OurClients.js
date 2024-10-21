import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components-css/our-clients.scss';  // Assuming you have this CSS file

function OurClients({ brandsData }) {
    const [hoveredLogo, setHoveredLogo] = useState(null);

    const handleMouseEnter = index => {
        setHoveredLogo(index);
    };

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='our-clients-main-container'>
            <h1>We've revolutionized your interaction with these global giants.</h1>
            <div className="brands-logo">
                <Slider {...settings}>
                    {brandsData?.map((brand, index) => (
                        <div
                            className="img"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img 
                                src={brand.file_path + brand.image} 
                                alt={`Brand ${index + 1}`} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default OurClients;
