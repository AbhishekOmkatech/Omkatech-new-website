import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import robotImg from '../pngs/robot.png';
import rightArrowBlack from '../assets/svgs/Group 3 (1).svg';
import ArrowIcon from '../assets/svgs/Group 3.svg';
import rightArrowWhite from '../assets/svgs/Group 3 (2).svg';
import BlogImage from '../pngs/Rectangle 41.png'
import '../components-css/blogs.scss';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const blog = [
    {
      id: 1,
      date: 'MAR 14, 2024',
      title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
      description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
      time: '5 MINUTE READ',
      image: BlogImage
    },
    {
      id: 2,
      date: 'MAR 14, 2024',
      title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
      description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
      time: '5 MINUTE READ',
      image: BlogImage
    },
    {
      id: 3,
      date: 'MAR 14, 2024',
      title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
      description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
      time: '5 MINUTE READ',
      image: BlogImage
    },
    {
      id: 4,
      date: 'MAR 14, 2024',
      title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
      description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
      time: '5 MINUTE READ',
      image: BlogImage
    },
    {
      id: 5,
      date: 'MAR 14, 2024',
      title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
      description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
      time: '5 MINUTE READ',
      image: BlogImage
    }
  ];
  const [showImage, setShowImage] = useState(false);
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState(null);
  const [blogs, setBlogs] = useState(blog);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  const handleHover = (index) => {
    setCurrentHoveredIndex(index);
    setShowImage(true);
    gsap.to(cardRefs.current[index], { height: 404, duration: 0.3 });
    // Reset height of other cards
    cardRefs.current.forEach((ref, i) => {
      if (i !== index) {
        gsap.to(ref, { height: 240, duration: 0.3 });
      }
    });
  };
  

  const handleMouseLeave = () => {
    setCurrentHoveredIndex(null);
    setShowImage(false);
    gsap.to(cardRefs.current[currentHoveredIndex], { height: 240, duration: 0.3 });
  };

  return (
    <div className="blogs-main-container">
      <h2>BLOGS</h2>
      <div className="cards">
        <div className="large-card">
          <p className="date">{blogs[0].date}</p>
          <div className="content">
            <h4>{blogs[0].title}</h4>
            <div><img src={robotImg} className={currentHoveredIndex === 0 ? "image-overlay" : ""} alt="img-icon" /></div>
            <p>{blogs[0].description}</p>
            <span><img src={ArrowIcon} alt="right-arrow-icon" /></span>
          </div>
        </div>
        <div className="small-cards">
          {blogs.slice(1).map((blog, index) => (
            <div onClick={()=> navigate(`/blog/${blog.id}`, {state: blog})} ref={(el) => (cardRefs.current[index + 1] = el)} id={`card-${index + 1}`} className="card" key={index} onMouseEnter={() => handleHover(index + 1)} onMouseLeave={handleMouseLeave}>
            <p className="date">{blog.date}</p>
              <div className="content">
                <h4>{blog.title}</h4>
                {showImage && currentHoveredIndex === index + 1 && <div><img src={robotImg} className="image-overlay" alt="img-icon" /></div>}
                <p>{blog.description}</p>
                <span><img className={`${currentHoveredIndex === index + 1 ? 'rotate': ''}`} src={ArrowIcon} alt="right-arrow-icon" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
