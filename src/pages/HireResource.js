import React, { useState } from 'react'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg';
import { Link } from "react-router-dom";
import processImg from '../assets/svgs/process-card-img.svg'
import img1 from '../pngs/Ellipse 23.png'
import img2 from '../pngs/Ellipse 25.png'
import img3 from '../pngs/Group 443.png'
import img4 from '../pngs/Ellipse 28.png'
import img5 from '../pngs/Ellipse 29.png'
import '../components-css/hire-resources.scss'
import technologyImg from '../assets/svgs/technology-img.svg'

const HireResource = () => {
  const hireOmkatechDevData = [
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    },
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    },
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    },
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    },
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    },
    {
      image: processImg,
      title: 'WHY HIRE DEVELOPERS FROM OMKA TECH!',
      description: 'Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.'
    }
  ]
  const technologyData = [
    {
      image: technologyImg,
      jobTitle: 'Magento developer',
      category: 'ecommerce'
    },
    {
      image: technologyImg,
      jobTitle: 'Frontend developer',
      category: 'frontend'
    },
    {
      image: technologyImg,
      jobTitle: 'Backend developer',
      category: 'backend'
    },
    {
      image: technologyImg,
      jobTitle: 'Full stack developer',
      category: 'backend'
    },
    {
      image: technologyImg,
      jobTitle: 'Python developer',
      category: 'backend'
    },
    {
      image: technologyImg,
      jobTitle: 'UI developer',
      category: 'frontend'
    },
    {
      image: technologyImg,
      jobTitle: 'Java developer',
      category: 'backend'
    },
    {
      image: technologyImg,
      jobTitle: 'JavaScript developer',
      category: 'frontend'
    },
    {
      image: technologyImg,
      jobTitle: 'Flutter developer',
      category: 'mobile'
    },
    {
      image: technologyImg,
      jobTitle: 'MERN developer',
      category: 'frontend'
    },
    {
      image: technologyImg,
      jobTitle: 'iOS developer',
      category: 'mobile'
    },
    {
      image: technologyImg,
      jobTitle: 'QA Engineer',
      category: 'QA'
    },
    {
      image: technologyImg,
      jobTitle: 'DevOps Engineer',
      category: 'devops'
    }
  ];

  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterTechnologyData = (category) => {
    if (category === 'all') return technologyData;
    return technologyData.filter(technology => technology.category === category);
  }

  return (
    <div className="hire-resources-container">
      <div className="our-testimonial-banner">
        <div className="testimonial-left-content">
          <h1>HIRE DEDICATED RESOURCES</h1>
          <p>Transform your ideas into reality by hiring our skilled developers. Get seamless, customized solution just as you need!</p>
        </div>
        <div className="testimonial-right-content">
          <img className="testimonial-image" src={img3} alt="img-1" />
        </div>
      </div>
      <div className="hire-developers">
        <h3>Hire Expert Developers, Don’t Just Outsource</h3>
        <p>Hiring dedicated developers to work on your project can be easier than you think, as OMKA TECH brings you a talented pool of professionals with expertise in different technologies. All you need to do is get connected with us and share your requirements. We have a team of 100+ professionals with rich and variant skill sets in a wide array of technologies that match the digital needs of businesses.</p>
      </div>
      <div className="hire-form">
        <h2>HIRE A RESOURCE TODAY!</h2>
        <p>Submit your details and we will get back to you.</p>
        <div className="form">
          <div className="inner-form-bg">
            <input type="text" placeholder='Full name' />
            <input type="text" placeholder='Your email address' />
            <input type="text" placeholder='Phone' />
            <select>
              <option value="">vinit</option>
              <option value="">vicky</option>
            </select>
            <input type="textarea" placeholder='Message' />
            <div className="button">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Link className='portfolio-page'>
                  <span>SUBMIT</span>
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
        </div>
      </div>
      <div className="our-hiring-process-section">
        <h2>5 EASY STEPS TO HIRE RESOURCES</h2>
        <p>We offer a hassle-free process for hiring resources. You can onboard the best resources.</p>
        <div className="process-cards">
          <div className="card">
            <img src={processImg} alt="" />
            <p>SEND US YOUR ENQUIRY</p>
          </div>
          <div className="card">
            <img src={processImg} alt="" />
            <p>PROFILE SCREENING</p>
          </div>
          <div className="card">
            <img src={processImg} alt="" />
            <p>SHORTLISTING</p>
          </div>
          <div className="card">
            <img src={processImg} alt="" />
            <p>INTERVIEWING</p>
          </div>
          <div className="card">
            <img src={processImg} alt="" />
            <p>ON-BOARDING</p>
          </div>
        </div>
      </div>
      <div className="our-expertise">
        <h2>Our Expertise - What Makes Us the Best Destination to Hire Resources</h2>
        <p>We cater extensive expertise in a range of technologies to help businesses build optimal solutions that overcome their challenges and drive comprehensive growth.</p>
        <div className="filter-tabs">
          <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>All</button>
          <button className={selectedCategory === 'backend' ? 'active' : ''} onClick={() => setSelectedCategory('backend')}>Backend Developer</button>
          <button className={selectedCategory === 'frontend' ? 'active' : ''} onClick={() => setSelectedCategory('frontend')}>Frontend Developer</button>
          <button className={selectedCategory === 'devops' ? 'active' : ''} onClick={() => setSelectedCategory('devops')}>DevOps</button>
          <button className={selectedCategory === 'mobile' ? 'active' : ''} onClick={() => setSelectedCategory('mobile')}>Mobile</button>
          <button className={selectedCategory === 'QA' ? 'active' : ''} onClick={() => setSelectedCategory('QA')}>QA</button>
          <button className={selectedCategory === 'ecommerce' ? 'active' : ''} onClick={() => setSelectedCategory('ecommerce')}>Ecommerce</button>
        </div>
        <div className="technology-cards">
          {filterTechnologyData(selectedCategory).map((technology, index) => (
            <div className="card" key={index}>
              <img src={technology.image} alt="" />
              <span>{technology.jobTitle}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hire-dev-omkatech">
        <h2>WHY HIRE DEVELOPERS FROM OMKA TECH!</h2>
        <p>Experience top-tier development with Omka Tech’s talented team, driving your projects toward exceptional outcomes and success.</p>
        <div className="cards">
          {hireOmkatechDevData.map((omkatechDev) => {
            return <div className="card">
              <img src={omkatechDev.image} alt="" />
              <h5>{omkatechDev.title}</h5>
              <p>{omkatechDev.description}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default HireResource;
