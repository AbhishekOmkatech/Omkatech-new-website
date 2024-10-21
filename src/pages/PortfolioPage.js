import React, { useState } from 'react';
import '../components-css/portfolio-page.scss';
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg';
import Project1 from '../pngs/Mask group (1).png';
import { useNavigate } from 'react-router-dom';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            img: Project1,
            title: 'Expansive Web Development',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.',
            category: 'web-development',
            buttonText: 'web development'
        },
        {
            id: 2,
            img: Project1,
            title: 'Expansive Mobile App',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.',
            category: 'mobile-apps',
            buttonText: 'mobile app'
        },
        {
            id: 3,
            img: Project1,
            title: 'Expansive Branding',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.',
            category: 'branding',
            buttonText: 'branding'
        },
        {
            id: 4,
            img: Project1,
            title: 'Expansive WordPress',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.',
            category: 'wordpress',
            buttonText: 'wordpress'
        },
        // Add more projects with appropriate categories
    ]);

    const [visibleProjects, setVisibleProjects] = useState(8);
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all'); // Default category

    const loadMore = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4); // Increase by 4, change as needed
    };

    // Filter projects based on selected category
    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className='portfolio-page-container'>
            <div className="portfolio-heading">
                <h1>PORTFOLIO</h1>
                <p>
                    A small sample of successfully completed projects by Never Settle. Take a closer
                    look at our Web Design, Web Development, Branding & Marketing projects completed
                    for Small Businesses, Enterprises, and Non-Profits.
                </p>
            </div>

            <div className="all-projects">
                {/* Tabs for filtering */}
                <div className="portfolio-tabs">
                    <button onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>All</button>
                    <button onClick={() => setSelectedCategory('web-development')} className={selectedCategory === 'web-development' ? 'active' : ''}>Web Development</button>
                    <button onClick={() => setSelectedCategory('mobile-apps')} className={selectedCategory === 'mobile-apps' ? 'active' : ''}>Mobile Apps</button>
                    <button onClick={() => setSelectedCategory('branding')} className={selectedCategory === 'branding' ? 'active' : ''}>Branding</button>
                    <button onClick={() => setSelectedCategory('wordpress')} className={selectedCategory === 'wordpress' ? 'active' : ''}>WordPress</button>
                </div>
                <div className="projects">
                    {filteredProjects.slice(0, visibleProjects)?.map((project, index) => (
                        <div key={index} className="project">
                            <div className="images-container">
                                <img src={project.img} alt={`project${index + 1}-icon`} className="project-image" />
                                <div className="overlay">
                                    <button onClick={() => { navigate(`/portfolio/${project.id}`) }}>
                                        {project.buttonText} <img src={GradientArrowIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleProjects < filteredProjects.length && (
                    <div className="button btn-center">
                        <button
                            onClick={loadMore}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span>Load More</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;
