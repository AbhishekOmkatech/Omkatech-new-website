import React from 'react'
import { useState, useRef, useEffect } from 'react'
import '../components-css/portfolio-page.scss'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import Project1 from '../pngs/Mask group (1).png'
import CaseStudy from '../components/CaseStudy';
import caseStudyImage from "../pngs/Rectangle 54.png";
import '../components-css/case-study-page.scss'
import { useNavigate } from 'react-router-dom';

const CaseStudyPage = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [contentData, setContentData] = useState([
        {
            id: 1,
            name: 'Avon spotless',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '2M+',
            users: '500K'
        },
        {
            id: 2,
            name: 'Adidas',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '4M+',
            users: '600K'
        },
        {
            id: 3,
            name: 'Reebok',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '6M+',
            users: '700K'
        },
    ]);

    return (
        <>
            <div className='portfolio-page-container'>
                <div className="portfolio-heading">
                    <h1>CASE STUDY</h1>
                    <p>A small sample of successfully complete projects by Never Settle. Take a closer look at our Web Design, Web Development, Branding & Marketing projects completed for Small Businesses, Enterprizes and Non Profits.</p>
                </div>
            </div>
            <div className="case-study-container d-flex">
                {contentData?.map((contentData, index) => (
                    <div className={`case-study-inner ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <div className="content-container left">
                            <h2>CASE STUDY</h2>
                            <h1>{contentData.name}</h1>
                            <p>{contentData.description}</p>
                            <div className="app-details">
                                <div className="results">
                                    <p>Results</p>
                                    <h2>{contentData.downloads}</h2>
                                    <span>App Download</span>
                                </div>
                                <div className="users">
                                    <h2>{contentData.users}</h2>
                                    <span>New users <br /> acquired</span>
                                </div>
                            </div>
                            <div className="button">
                                <button onClick={() => navigate(`/case-study/${contentData.id}`)} className="btn-bg" onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}>
                                    <span>VIEW CASE STUDY</span> <span className='img'>
                                        {isHovered ? (
                                            <img src={GradientArrowIcon} alt="gradient-icon" />
                                        ) : (
                                            <img src={ArrowIcon} alt="arrow-icon" />
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="image-container right">
                            <img src={caseStudyImage} alt="image" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CaseStudyPage