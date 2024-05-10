import React from 'react';
import { useLocation } from 'react-router-dom';
import '../components-css/single-blog-page.scss'

const SingleBlogPage = (props) => {
  const location = useLocation();
  console.log('location', location)
  return (
    <div className='single-blog-page-container'>
      <h1>{location.state.title}</h1>
      <span>{location.state.date}</span>
      <span>{location.state.time}</span>
      <div className="image">
        <img src={location.state.image} alt="blog-icon" />
      </div>
      <p>{location.state.description}</p>
      {/* Other details */}
    </div>
  );
};

export default SingleBlogPage;