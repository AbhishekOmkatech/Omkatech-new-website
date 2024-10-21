import React, {useState} from 'react'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg';
import '../components-css/single-casestudy-page.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import projectImg from '../pngs/Group 672.png';
import clientImg from '../pngs/Ellipse 27 (1).png'

const SingleCasestudyPage = () => {
    const settings = {
        infinite: true,
        speed: 500,
        wheelControl: false,
        trimWhiteSpace: true,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint
                settings: {
                    slidesToShow: 4.1, // Show 3 slides on tablet
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
    const projectProblemData = [
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        }
    ]
    const projectSolutionData = [
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        },
        {
            title: 'Complex user interface',
            description: 'Many live GPS tracking mobile apps suffer from a complex and cluttered user interface. Users often find it challenging to navigate through various features, settings, and maps, which can lead to a frustrating user experience.'
        }
    ]
    return (
        <div className="single-case-study-container">
            <div className="banner">
                <h1>SHIELDRADR</h1>
                <p>Real-Time GPS Tracking at Your Fingertips</p>
            </div>
            <div className="about-project-case-study">
                <div className="about-left">
                    <h2>ABOUT <span>SHIELDRADR</span></h2>
                    <p>The Live GPS Tracking mobile application is designed to provide real-time location tracking for all subscribed users. Available on both Android and iOS platforms, this application offers a reliable and secure way for users to share their live location with a designated admin in case of an emergency or when they need assistance. The app is equipped with advanced GPS technology, ensuring accurate and up-to-date location data at all times.</p>
                </div>
                <div className="about-right">
                    <h4>PROJECT INDUSTRY</h4>
                    <span>Telecommunications (Real-Time Location Tracking)</span>
                    <h4>PROJECT INDUSTRY</h4>
                    <span>Telecommunications (Real-Time Location Tracking)</span>
                    <h4>PROJECT INDUSTRY</h4>
                    <span>Telecommunications (Real-Time Location Tracking)</span>
                </div>
            </div>
            <div className="project-problem-solution">
                <div className="project-problem">
                    <h2>PROJECT PROBLEM</h2>
                    {projectProblemData?.map((project) => {
                        return <ul>
                            <li>{project.title}</li>
                            <span>{project.description}</span>
                        </ul>
                    })}
                </div>
                <div className="project-solution">
                    <h2>PROJECT SOLUTION</h2>
                    {projectSolutionData?.map((project) => {
                        return <ul>
                            <li>{project.title}</li>
                            <span>{project.description}</span>
                        </ul>
                    })}
                </div>
            </div>
            <div className="project-showcase">
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
    )
}

export default SingleCasestudyPage