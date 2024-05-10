import React, { useRef, useEffect, useState } from "react";
import "../components-css/case-study.scss";
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import caseStudyImage from "../pngs/Rectangle 54.png";

const CaseStudy = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [contentData, setContentData] = useState([
        {
            name: 'Avon spotless',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '2M+',
            users: '500K'
        },
        {
            name: 'Adidas',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '4M+',
            users: '600K'
        },
        {
            name: 'Reebok',
            description: 'Scores the perfect digital landing in UAE',
            downloads: '6M+',
            users: '700K'
        },
    ]);

    const imageData = [
        caseStudyImage,
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    
        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const containerHeight = container.offsetHeight;
            const imageHeight = containerHeight;
            const currentIndex = Math.floor(scrollTop / imageHeight);
            setActiveIndex(currentIndex);
    
            // Set z-index based on scroll position
            contentRef.current.style.zIndex = scrollTop > 0 ? 2 : 1;
        };
    
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="case-study-container">
            <div className="content-container" ref={contentRef}>
                <h2>CASE STUDY</h2>
                <h1>{contentData[activeIndex].name}</h1>
                <p>{contentData[activeIndex].description}</p>
                <div className="app-details">
                    <div className="results">
                        <p>Results</p>
                        <h2>{contentData[activeIndex].downloads}</h2>
                        <span>App Download</span>
                    </div>
                    <div className="users">
                        <h2>{contentData[activeIndex].users}</h2>
                        <span>New users <br /> acquired</span>
                    </div>
                </div>
                <div className="button">
                    <button className="btn-bg" onMouseEnter={() => setIsHovered(true)}
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
            <div className="image-container" ref={containerRef}>
                {imageData.map((img, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={img} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudy;