import React, { useState } from 'react'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg';
import '../components-css/service-page.scss'
import designingImg from '../assets/svgs/our-designing-process.svg'
import toolsUsedImg from '../pngs/Group 105133.png'
import chooseImg from '../pngs/Rectangle 394.png'
import OurClients from '../components/OurClients'
import circleArrow from '../assets/svgs/circle-arrow.svg'
import Faq from '../components/Faq'
import { Link } from "react-router-dom";

const ServicePage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const relatedArticlesData = [
        {
            image: circleArrow,
            heading: 'Design Systems Repo',
            description: 'A one-stop place for design system ...'
        },
        {
            image: circleArrow,
            heading: 'Design Systems Repo',
            description: 'A one-stop place for design system ...'
        },
        {
            image: circleArrow,
            heading: 'Design Systems Repo',
            description: 'A one-stop place for design system ...'
        },
    ]
    const designingProcessData = [
        {
            image: designingImg,
            title: 'DISCOVER',
            list: [
                {
                    name: 'User Research',
                },
                {
                    name: 'User Surveys',
                },
                {
                    name: 'User Persona',
                },
                {
                    name: 'User Stories',
                }
            ]
        },
        {
            image: designingImg,
            title: 'DISCOVER',
            list: [
                {
                    name: 'User Research',
                },
                {
                    name: 'User Surveys',
                },
                {
                    name: 'User Persona',
                },
                {
                    name: 'User Stories',
                }
            ]
        },
        {
            image: designingImg,
            title: 'DISCOVER',
            list: [
                {
                    name: 'User Research',
                },
                {
                    name: 'User Surveys',
                },
                {
                    name: 'User Persona',
                },
                {
                    name: 'User Stories',
                }
            ]
        }
    ]
    return (
        <div className="parallax-container">
            {/* The fixed background image */}
            <div className="background"></div>

            {/* White overlay section with text */}
            <div className="white-overlay">
                <div className="content">
                    <h1>BRANDING $ UI/UX DESIGNING</h1>
                    <p>Creating visually stunning designs that capture attention add delivering user-centric experiences that leave a lasting impression.</p>
                    <div className="button">
                        <button onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <Link className='portfolio-page'><span>BOOK A FREE CONSULTATION</span></Link><span className='img'>
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

            {/* Additional scrolling content */}
            <div className="scroll-content">
            </div>
            <div className="our-designing-process">
                <h2>OUR DESIGNING PROCESS</h2>
                <p>We combine our team’s depth of experience in design, our client’s intimate knowledge of the industries they serve and insights uncovered through the discoveries we make.</p>
                <div className="cards">
                    {designingProcessData.map((designing) => {
                        return <div className="card">
                            <img src={designing.image} alt="" />
                            <h4>{designing.title}</h4>
                            <ul>
                                {designing.list.map((list) => {
                                    return <li>{list.name}</li>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </div>
            <div className="tools-used">
                <h2>Tools We Use for Ideation and Product Design</h2>
                <img src={toolsUsedImg} alt="" />
            </div>
            <div className="why-choose-omkatech">
                <div className="left-content">
                    <h3>Why Choose OMKA TECH For Your Design?</h3>
                    <p>Exceptional user experience design is the essence of a successful app. As it keep users coming back. Here at OMKA TECH UI/UX and graphic designing are our key competencies and our creative team of designers and strategists lay a high emphasis on delivering captivating user experiences. Since inception, we believe that successful applications are user-friendly, handy and easy to use, yet functional and market-centric.</p>
                    <ul>
                        <li>Reinventing and reformulating smart mobile app design</li>
                        <li>Our apps are a combination of incredible UI, intuitive designs, and elegant digital strategy</li>
                        <li>Our app Designers Create Award-Winning and amazing Apps</li>
                        <li>Retain customer’s loyalty with an exceptional UI/UX</li>
                        <li>Captivating apps that attract and engage customers</li>
                    </ul>
                </div>
                <div className="right-img">
                    <img src={chooseImg} alt="" />
                </div>
            </div>
            <OurClients />
            <div className="realted-articles">
                <h2>RELATED ARTICLES</h2>
                <div className="slide-images">
                    {relatedArticlesData.map((articlesData) => {
                        return <div className="slide">
                            <img src={articlesData.image} alt="" />
                            <div className="heading">
                                <h5>{articlesData.heading}</h5>
                                <p>{articlesData.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Faq />
            <div className="bg">
            <div className="connect-with-expert">
                <h2>Product Design and Ideation Services</h2>
                <p>We ideate, design, and deliver seamless experiences by bridging the gap between your idea and the product </p>
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
        </div>
    )
}

export default ServicePage
