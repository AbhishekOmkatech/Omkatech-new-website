import React, { useState } from 'react'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg';
import { Link } from "react-router-dom";
import '../components-css/single-portfolio-page.scss';
import bannerRightImg from '../pngs/Group 716.png';
import projectImg from '../pngs/Group 672.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientImg from '../pngs/Ellipse 27 (1).png'

const SinglePortfolioPage = () => {
    const settings = {
        infinite: true,
        speed: 500,
        wheelControl: false,
        trimWhiteSpace: true,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 3.1, // Show 3 slides on tablet
                },
            },
            {
                breakpoint: 767, // Phone breakpoint
                settings: {
                    slidesToShow: 2, // Show 2 slides on phone
                },
            },
        ],
    };

    const projectData = [
        {
            title: 'Test Project 1',
            image: projectImg
        },
        {
            title: 'Test Project 2',
            image: projectImg
        },
        {
            title: 'Test Project 3',
            image: projectImg
        },
        {
            title: 'Test Project 4',
            image: projectImg
        },
        {
            title: 'Test Project 5',
            image: projectImg
        },
        {
            title: 'Test Project 6',
            image: projectImg
        },
        {
            title: 'Test Project 7',
            image: projectImg
        }
    ];

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="single-portfolio-container">
            <div className="banner">
                <div className="banner-left">
                    <h1>HOME OFFER EZ</h1>
                    <h3>Property Selling Mobile App</h3>
                    <div className="button">
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Link className='portfolio-page'>
                                <span>View case study</span>
                            </Link>
                            <span className='img'>
                                {isHovered ? (
                                    <img src={GradientArrowIcon} alt="gradient-icon" />
                                ) : (
                                    <img src={ArrowIcon} alt="arrow-icon" />
                                )}
                            </span>
                        </button>
                    </div>
                </div>
                <div className="banner-right">
                    <img src={bannerRightImg} alt="Banner Right" />
                </div>
                <div className="button d-none">
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Link className='portfolio-page'>
                                <span>View case study</span>
                            </Link>
                            <span className='img'>
                                {isHovered ? (
                                    <img src={GradientArrowIcon} alt="gradient-icon" />
                                ) : (
                                    <img src={ArrowIcon} alt="arrow-icon" />
                                )}
                            </span>
                        </button>
                    </div>
            </div>
            <div className="project-overview">
                <h4>Project Overview</h4>
                <hr />
                <p>
                    The property selling mobile app is designed to create a user-friendly platform
                    that connects property sellers with potential buyers. The app aims to streamline
                    the buying and selling process by offering comprehensive features such as property
                    listings, advanced search filters, and virtual tours. <br /> <br />
                    This application serves as a bridge between property sellers and potential buyers,
                    making it easier for users to list, discover, and purchase properties. It simplifies
                    the entire real estate process by providing a centralized platform.
                </p>
            </div>
            <div className="project-showcase">
                <h4>Project Showcase</h4>
                <hr />
                <div className="project-slider">
                    <Slider {...settings}>
                        {projectData?.map((project, index) => (
                            <div className='width' key={index}>
                                <p>{project.title}</p>
                                <img src={project.image} alt={project.title} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="project-client">
                <div className="bg-color">
                    <div className="about-client">
                        <img src={clientImg} alt="" />
                        <h5>CLIENT NAME</h5>
                        <span>Founder of xyz</span>
                    </div>
                    <div className="client-review">
                        <p>"The HomeOffersEZ app has revolutionized how our clients search for properties.
                            We've received fantastic feedback from users, and our sales have significantly
                            increased. Kudos to the team for their outstanding work! We've received fantastic
                            feedback from users, and our sales have significantly
                            increased. Kudos to the team for their outstanding work!"</p>
                        <div className="button">
                            <button onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}>
                                <Link className='portfolio-page'><span>VIEW CASE STUDY</span></Link><span className='img'>
                                    {isHovered ? (
                                        <img src={GradientArrowIcon} alt="gradient-icon" />
                                    ) : (
                                        <img src={ArrowIcon} alt="arrow-icon" />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="start-your-project">
                <h2>Embark on Your Dream Project Journey With Us</h2>
                <p>We provide exceptional, user-friendly healthcare solutions that improve patient care and ensure data privacy. Allow us to turn your vision into reality with our premier healthcare app development services.</p>
                <div className="button">
                    <button onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <Link className='portfolio-page'><span>START YOUR PROJECT TODAY</span></Link><span className='img'>
                            {isHovered ? (
                                <img src={GradientArrowIcon} alt="gradient-icon" />
                            ) : (
                                <img src={ArrowIcon} alt="arrow-icon" />
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolioPage;
