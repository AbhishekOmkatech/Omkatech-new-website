import React, { useState } from 'react';
import aboutImg from '../pngs/Rectangle 149.png';
import Img from '../assets/svgs/menu-bar.svg'
import Slider from 'react-slick';
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import googleReview from '../pngs/image 31.png'
import crunchBaseReview from '../pngs/image 32.png'
import glassDoorReview from '../pngs/image 33.png'
import goodFirmsReview from '../pngs/image 34.png'
import cluthReview from '../pngs/image 35.png'
import ambitionBoxReview from '../pngs/image 36.png'
import appFuturaReview from '../pngs/image 37.png'
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components-css/about-omkatech.scss';
import OurClients from '../components/OurClients';
import carrerImg from '../pngs/Group 105159.png'

const AboutOmkatech = () => {
  const platformImages = [
    googleReview, glassDoorReview, crunchBaseReview, goodFirmsReview, cluthReview, ambitionBoxReview, appFuturaReview
  ]
  const [isHovered, setIsHovered] = useState(false);
  const slider1 = [
    {
      count: '1000+',
      title: 'Projects Delivered Successfully'
    },
    {
      count: '5+',
      title: 'Years of Experience'
    },
    {
      count: '70+',
      title: 'Skilled Professional Team'
    }
  ];
  const slider2 = [
    {
      count: '96%',
      title: 'Client Retention Rate'
    },
    {
      count: '50+',
      title: 'Admirable Reviews'
    },
    {
      count: '13+',
      title: 'Countries Operated'
    }
  ];

  const settings1 = {
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 3 slides on tablet
        },
      },
      {
        breakpoint: 767, // Mobile breakpoint
        settings: {
          slidesToShow: 1.2, // Show 2 slides on mobile
        },
      },
    ],
  };
  const settings2 = {
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    arrows: false,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 3 slides on tablet
        },
      },
      {
        breakpoint: 767, // Mobile breakpoint
        settings: {
          slidesToShow: 1.2, // Show 2 slides on mobile
        },
      },
    ],
  }
  const settings3 = {
    infinite: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 5, // Show 3 slides on tablet
        },
      },
      {
        breakpoint: 767, // Mobile breakpoint
        settings: {
          slidesToShow: 4, // Show 2 slides on mobile
        },
      },
    ],
  }
  const expertiseData = [
    {
      title: 'Free Cost- Analysis',
      description: 'The quote for the project is free of cost You can come to us for the quote and also using our experience in this industry we also suggest to make your business a great success and that too for free'
    },
    {
      title: 'Complete Source Code',
      description: 'We do not keep any ownership credentials for the project. Once the project is complete, we provide the complete source code to the client.'
    },
    {
      title: 'User-Friendly Designs',
      description: 'Our designs are unique yet attractive and designing is done in such a way so that it can be used effortlessly.'
    },
    {
      title: 'Superior Quality',
      description: "Our experience and professional team develop the superior quality code and mentions comment while writing so that it's easy for anyone to understand the code."
    },
    {
      title: 'Free Cost- Analysis',
      description: 'The quote for the project is free of cost You can come to us for the quote and also using our experience in this industry we also suggest to make your business a great success and that too for free'
    },
    {
      title: 'Complete Source Code',
      description: 'We do not keep any ownership credentials for the project. Once the project is complete, we provide the complete source code to the client.'
    },
    {
      title: 'User-Friendly Designs',
      description: 'Our designs are unique yet attractive and designing is done in such a way so that it can be used effortlessly.'
    },
    {
      title: 'Superior Quality',
      description: "Our experience and professional team develop the superior quality code and mentions comment while writing so that it's easy for anyone to understand the code."
    }
  ]

  return (
    <div className='about-us-main-container'>
      <div className="about-banner">
        <h1>ABOUT OMKATECH</h1>
        <p>Omka tech Believes that the world revolves around technology.</p>
      </div>
      <div className="about-section">
        <img src={aboutImg} alt="about-img" />
        <div className="about-description">
          <h2>ABOUT US</h2>
          <p>Omka Tech is a next-generation global leader stands at the forefront of technological
            innovation in the IT industry enabling 3000+ clients from different countries viz India,
            USA, Canada, Australia, South Africa, Korea, Europe and many more to maneuver their
            digital transformation. <br /><br />
            With over 5 years of experience, we proficiently navigate our clients throughout their
            digital journey.  As a global business strategy and operations firm, our goal is to assist
            our clients in meeting their business needs and optimizing their strengths globally. <br /><br />
            Beyond the business, we have established Omka Tech as the optimal IT solution to
            bridge the digital gap. Here we assist numerous enterprises to take them to the next
            level of success! We are committed to delivering high-quality projects on time and
            within budget.

          </p>
        </div>
      </div>
      <Slider {...settings1}>
        {
          slider1?.map((project, index) => {
            return <div className="project-slider" key={index}>
              <h2>{project.count}</h2>
              <span>{project.title}</span>
            </div>
          })
        }
      </Slider>
      <Slider {...settings2}>
        {
          slider2?.map((project, index) => {
            return <div className="project-slider" key={index}>
              <h2>{project.count}</h2>
              <span>{project.title}</span>
            </div>
          })
        }
      </Slider>
      <div className="expertise-section">
        <h2>Why Choose OMKA TECH</h2>
        <p>Experience Unmatched Quality and Service That Exceeds Your Expectations</p>
        <div className="expertise-cards-section">
          {
            expertiseData?.map((data) => {
              return <div className="expertise-cards">
                <h3>{data.title}</h3>
                <span>{data.description}</span>
                <div className="img">
                  <img src={Img} alt="" />
                </div>
              </div>
            })
          }
        </div>
      </div>
      {/* <OurClients /> */}
      <div className="join-our-team-section">
        <div className="left">
          <h3>CAREER</h3>
          <p>Teamwork is the capability to unite efforts
            towards a shared objective.</p>
          <div className="button">
            <button onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <Link className='portfolio-page' to="portfolio"><span>JOIN OUR TEAM</span></Link><span className='img'>
                {isHovered ? (
                  <img src={GradientArrowIcon} alt="gradient-icon" />
                ) : (
                  <img src={ArrowIcon} alt="arrow-icon" />
                )}
              </span>
            </button>
          </div>
        </div>
          <div className="right">
            <img src={carrerImg} alt="" />
          </div>
      </div>
      <div className="platform-review">
        <div className="img">
        <Slider {...settings3}>
          {
            platformImages?.map((image) => {
              return <img src={image} alt="" />
            })
          }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutOmkatech;
