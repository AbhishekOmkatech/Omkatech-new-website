import React, { useState } from 'react'
import carrerImg from '../pngs/Group 540.png'
import EmployeeImg from '../pngs/image 25.png'
import groupImg from '../assets/svgs/group.svg'
import processImg from '../assets/svgs/process-card-img.svg'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import { Link } from "react-router-dom";
import Popup from '../components/popup'; // Import Popup component
import '../components-css/carrer-page.scss'

const CarrerPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [active, setActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
    const [selectedJobTitle, setSelectedJobTitle] = useState(''); // State to manage selected job title

    const handleApplyClick = (jobTitle) => {
        setSelectedJobTitle(jobTitle);
        setShowPopup(true);
        console.log('check')
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedJobTitle('');
    };

    return (
        <div className='carrer-page-main-container'>
            {showPopup && <Popup jobTitle={selectedJobTitle} onClose={handleClosePopup} />} {/* Render Popup if showPopup is true */}
            <div className="carrer-with-us-section">
                <div className="left">
                    <h3>CAREER WITH US</h3>
                    <h1>Competitive and stable working opportunities at <span>OMKATECH</span></h1>
                    <p>Career with OMKATECH Pvt Ltd can be very rewarding and promising as it is a growing
                        company. Innovative and challenging projects will take your career to the next level.</p>
                    <span>OMKATECH gives you a full-blown career.</span>
                </div>
                <div className="right">
                    <img src={carrerImg} alt="banner-img" />
                </div>
            </div>
            <div className="employee-card">
                <div className="images">
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                    <img src={EmployeeImg} alt="employee-img" />
                </div>
                <span>&</span>
                <p><span>This</span> Could be you!</p>
            </div>
            <div className="join-us">
                <h4>Come <span>JOIN US</span> to create wow factor...</h4>
            </div>
            <div className="perks-section">
                <h3>Perks of Joining Us!</h3>
                <p>When you work for us, you are not just an employee. You are a family member who we equally care for your personal
                    growth along with your professional progress. We ensure that you get to enjoy a balanced work-life day aiming to
                    enhance peace of mind.</p>
                <div className="perks-cards">
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                    <div className="card">
                        <img src={groupImg} alt="" />
                        <h4>Employee First</h4>
                    </div>
                </div>
            </div>
            <div className="our-hiring-process-section">
                <h2>Our Hiring Process</h2>
                <div className="process-cards">
                    <div className="card">
                        <img src={processImg} alt="" />
                        <p>Initial HR Round</p>
                    </div>
                    <div className="card">
                        <img src={processImg} alt="" />
                        <p>Virtual Evaluation Round</p>
                    </div>
                    <div className="card">
                        <img src={processImg} alt="" />
                        <p>Personal Interview</p>
                    </div>
                    <div className="card">
                        <img src={processImg} alt="" />
                        <p>Happy Onboarding</p>
                    </div>
                </div>
            </div>
            <div className="job-openings-section">
                <h2>Job Openings</h2>
                <p>OMKATECH is inviting talented and serious professionals from Developers to experts in Design, SEO, Testing, and more to be a part of the top-performing Software Development Company. <br /> <br /> Email us your updated Résumé/CV at hr@omkatech.com We are currently hiring for the below positions:</p>
                <div className="jobs-cards-section">
                    <div className="jobs-card">
                        <div className="left-section" onClick={() => { setActive(!active) }}>
                            <div className="job-heading">
                                <h3>Project Manager</h3>
                                <span>Experience : 2 years</span>
                            </div>
                            <div className='hr'></div>
                            <p>Job Description:</p>
                            <span>Skill Set: Project Planning, Resource Optimization, Project Budgeting, Client Management, Task Planning, Status Reports,</span>
                        </div>
                        <div className="button">
                            <button
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                onClick={() => handleApplyClick('Full Stack Developer')}
                            >
                                <span>APPLY NOW</span><span className='img'>
                                    {isHovered ? (
                                        <img src={GradientArrowIcon} alt="gradient-icon" />
                                    ) : (
                                        <img src={ArrowIcon} alt="arrow-icon" />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                    {active && <div className="hidden-details">
                        <hr />
                        <ul>
                            <p>Skills Required:</p>
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, maxime!</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, aliquid.</li>
                        </ul>
                    </div>}
                </div>
            </div>
            <div className="tagline">
                <h2>We Innovate Together, Flourish Together, and Grow Together.!!</h2>
            </div>
        </div>
    )
}

export default CarrerPage
