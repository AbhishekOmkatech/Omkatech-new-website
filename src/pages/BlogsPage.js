import React, { useEffect, useState } from 'react'
import '../components-css/blogs-page.scss'
import rightArrowWhite from '../assets/svgs/Group 3 (2).svg';
import robotImg from '../pngs/01-01 1.png';
import bigRobotImg from '../pngs/01-01 2.png'
import MenuBar from '../assets/svgs/Group 3.svg';
import axios from 'axios'


const BlogsPage = () => {
    useEffect(() => {
        blogsApi()
    }, [])
    const [showImage, setShowImage] = useState(false);
    const [blogData, setBlogData] = useState([])

    const blogsApi = async () => {
        try {
            const response = await axios.get('http://localhost:8000/server.php');
            setBlogData(response.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    }

    const handleHover = () => {
        setShowImage(true);
    };

    const handleMouseLeave = () => {
        setShowImage(false);
    };
    return (
        <div className="blogs-page-main-container">
            <div className="recent-blog">
                <div className="img">
                    <img src={bigRobotImg} alt="robot-img-icon" />
                </div>
                <div className="content">
                    <h1>THE EVOLUTION OF AI-AUGMENTED SOFTWARE DEVELOPMENT.</h1>
                    <p>Technological evolution has come a long way! The proposition that task....</p>
                    <span>MAR 14, 2024</span>
                    <img src={MenuBar} alt="menu-bar-icon" />
                </div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="blog-cards">
                {blogData.map((blog) => (
                    <div className="card" key={blog.id}>
                        <a href="https://www.omkatech.com/blog" target="_blank">
                        <p className="date">{blog.date}</p>
                        <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="content">
                            <h4>{blog.title}</h4>
                            {console.log('tet', blog.image)}
                            {showImage && <div><img src={blog.image} className="image-overlay" alt="img-icon" /></div>}
                            <p>
                                {blog.content}
                            </p>
                            <span>
                                <img src={rightArrowWhite} alt="right-arrow-icon" />
                            </span>
                        </div>
                </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage