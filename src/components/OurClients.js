import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components-css/our-clients.scss';  // Assuming you have this CSS file
import axios from 'axios';
import { BASE_URL } from '../config';

function OurClients() {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [brandsData, setBrandsData] = useState(null)

    const handleMouseEnter = index => {
        setHoveredLogo(index);
    };

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    };

    const getClientsData = async () => {
        try {
            let response = await axios.get(`${BASE_URL}/brand`)
            setBrandsData(response.data.data)
            console.log('check brands response', response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClientsData()
    }, [])

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
                                src={hoveredLogo === index ? brand.file_path + brand.image : brand.file_path + brand.black_and_white_image}
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
