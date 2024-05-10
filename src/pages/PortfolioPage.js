import React from 'react'
import { useState } from 'react'
import '../components-css/portfolio-page.scss'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import Project1 from '../pngs/Mask group (1).png'

const PortfolioPage = () => {
    const [projects, setProjects] = useState([
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        },
        {
            img: Project1,
            title: 'Expansive',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, iste.'
        }
    ])
    const [visibleProjects, setVisibleProjects] = useState(8);
    const [isHovered, setIsHovered] = useState(false);

    const loadMore = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 4); // Increase by 4, change as needed
    };
    return (
        <div className='portfolio-page-container'>
            <div className="portfolio-heading">
                <h1>PORTFOLIO</h1>
                <p>A small sample of successfully complete projects by Never Settle. Take a closer look at our Web Design, Web Development, Branding & Marketing projects completed for Small Businesses, Enterprises, and Non-Profits.</p>
            </div>
            <div className="all-projects">
            <div className="projects">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <div key={index} className="project">
                        <div className="images-container">
                            <img src={project.img} alt={`project${index + 1}-icon`} className="project-image" />
                            <div className="overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                {visibleProjects < projects.length && (
                <div className="button btn-center">
                <button onClick={loadMore} onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}>
                  <span>Load More</span>
                </button>
              </div>
            )}
            </div>
        </div>
    );
}

export default PortfolioPage