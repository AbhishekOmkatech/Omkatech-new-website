// App.js
import React, {useState} from 'react';
import Slider from 'react-slick';
import Img from '../assets/svgs/menu-bar.svg'
import blogImg from '../pngs/Rectangle 148.png'
import '../components-css/blogs.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowIcon from '../assets/svgs/Group 3.svg';
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function App({blogsData}) {
  const [isHovered, setIsHovered] = useState(false);
  let navigate = useNavigate()
  function formatDate(isoString) {
    const date = new Date(isoString);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const isoString = blogsData.first_blog[0].created_at;
  const formattedDate = formatDate(isoString);

  const settings = {
    infinite: blogsData.blog_list.length > 1, // Disable infinite scrolling if only one slide
    speed: 5000,
    slidesToShow: blogsData.blog_list.length > 1 ? 2 : 1, // Show only one slide if only one slide is available
    autoplay: blogsData.blog_list.length > 1, // Enable autoplay only if more than one slide
    autoplaySpeed: 0,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    cssEase: 'linear',
  };

  return (
    <div className="blogs-main-container">
      <div className="left-section" onClick={()=> {navigate(`/blog/${blogsData.first_blog[0].id}`, {state: blogsData.first_blog[0].id})}}>
          <p>{formattedDate}</p>
          <h2>{blogsData.first_blog[0].title}</h2>
          <img className='image' src={blogsData.first_blog[0].file_path + blogsData.first_blog[0].image} alt="" />
          <div className="button">
          <button onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link className='portfolio-page'><span>BLOG</span></Link><span className='img'>
              {isHovered ? (
                <img src={GradientArrowIcon} alt="gradient-icon" />
              ) : (
                <img src={ArrowIcon} alt="arrow-icon" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="right-slider-section">
      <Slider {...settings}>
        {
          blogsData.blog_list.map((blog)=> (
            <div onClick={()=> {navigate(`/blog/${blog.id}`, {state: blog.id})}} className='slide' key={blog.id}>
              <img className='blog-image' src={blog.file_path + blog.image} alt="" />
              <div className="heading">
              <div className="img">
                  <img src={Img} alt="" />
                </div>
              <h3>{blog.title}</h3>
              </div>
            </div>
          ))
        }
      </Slider>
      </div>
    </div>
  );
}

export default App;

// import React, { useState, useRef } from 'react';
// import gsap from 'gsap';
// import robotImg from '../pngs/robot.png';
// import rightArrowBlack from '../assets/svgs/Group 3 (1).svg';
// import ArrowIcon from '../assets/svgs/Group 3.svg';
// import rightArrowWhite from '../assets/svgs/Group 3 (2).svg';
// import BlogImage from '../pngs/Rectangle 41.png'
// import '../components-css/blogs.scss';
// import { useNavigate } from 'react-router-dom';

// const Blogs = () => {
//   const blog = [
//     {
//       id: 1,
//       date: 'MAR 14, 2024',
//       title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
//       description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... Technological evolution has come a long way! The proposition that task could be automated with just a few lines of.... Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
//       time: '5 MINUTE READ',
//       image: BlogImage
//     },
//     {
//       id: 2,
//       date: 'MAR 14, 2024',
//       title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
//       description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
//       time: '5 MINUTE READ',
//       image: BlogImage
//     },
//     {
//       id: 3,
//       date: 'MAR 14, 2024',
//       title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
//       description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
//       time: '5 MINUTE READ',
//       image: BlogImage
//     },
//     {
//       id: 4,
//       date: 'MAR 14, 2024',
//       title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
//       description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
//       time: '5 MINUTE READ',
//       image: BlogImage
//     },
//     {
//       id: 5,
//       date: 'MAR 14, 2024',
//       title: 'THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.',
//       description: 'Technological evolution has come a long way! The proposition that task could be automated with just a few lines of....',
//       time: '5 MINUTE READ',
//       image: BlogImage
//     }
//   ];
//   const [showImage, setShowImage] = useState(false);
//   const [currentHoveredIndex, setCurrentHoveredIndex] = useState(null);
//   const [blogs, setBlogs] = useState(blog);
//   const cardRefs = useRef([]);
//   const navigate = useNavigate();

//   const handleHover = (index) => {
//     setCurrentHoveredIndex(index);
//     setShowImage(true);
//     gsap.to(cardRefs.current[index], { height: 404, duration: 0.3 });
//     // Reset height of other cards
//     cardRefs.current.forEach((ref, i) => {
//       if (i !== index) {
//         gsap.to(ref, { height: 240, duration: 0.3 });
//       }
//     });
//   };
  

//   const handleMouseLeave = () => {
//     setCurrentHoveredIndex(null);
//     setShowImage(false);
//     gsap.to(cardRefs.current[currentHoveredIndex], { height: 240, duration: 0.3 });
//   };

//   return (
//     <div className="blogs-main-container">
//       <h2>BLOGS</h2>
//       <div className="cards">
//         <div className="large-card">
//           <p className="date">{blogs[0].date}</p>
//           <div className="content">
//             <h4>{blogs[0].title}</h4>
//             <div><img src={robotImg} className={currentHoveredIndex === 0 ? "image-overlay" : ""} alt="img-icon" /></div>
//             <p>{blogs[0].description}</p>
//             <span><img src={ArrowIcon} alt="right-arrow-icon" /></span>
//           </div>
//         </div>
//         <div className="small-cards">
//           {blogs.slice(1).map((blog, index) => (
//             <div onClick={()=> navigate(`/blog/${blog.id}`, {state: blog})} ref={(el) => (cardRefs.current[index + 1] = el)} id={`card-${index + 1}`} className="card" key={index} onMouseEnter={() => handleHover(index + 1)} onMouseLeave={handleMouseLeave}>
//             <p className="date">{blog.date}</p>
//               <div className="content">
//                 <h4>{blog.title}</h4>
//                 {showImage && currentHoveredIndex === index + 1 && <div><img src={robotImg} className="image-overlay" alt="img-icon" /></div>}
//                 <p>{blog.description}</p>
//                 <span><img className={`${currentHoveredIndex === index + 1 ? 'rotate': ''}`} src={ArrowIcon} alt="right-arrow-icon" /></span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

