import React, { useEffect, useState } from 'react'
import '../components-css/blogs-page.scss'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import BlogImage from '../pngs/Rectangle 41.png'
import bigRobotImg from '../pngs/01-01 2.png'
import MenuBar from '../assets/svgs/Group 3.svg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const BlogsPage = () => {
    const [showImage, setShowImage] = useState(false);
    const [blogData, setBlogData] = useState([
        {
            id: 1,
            title: 'The Importance of Learning PHP',
            description: 'PHP is a popular server-side scripting language that is widely used for web development. Learning PHP can open up many opportunities...',
            image: BlogImage, // File path of the image in the 'images' directory
            time: '5 MINUTE READ',
            date: 'MAR 19, 2024'
        },
        {
            id: 2,
            title: 'The Importance of Learning PHP',
            description: 'PHP is a popular server-side scripting language that is widely used for web development. Learning PHP can open up many opportunities...',
            image: BlogImage, // File path of the image in the 'images' directory
            time: '5 MINUTE READ',
            date: 'MAR 19, 2024'
        },
        {
            'id': 3,
            'title': 'The Importance of Learning PHP',
            'description': 'PHP is a popular server-side scripting language that is widely used for web development. Learning PHP can open up many opportunities...',
            'image': BlogImage, // File path of the image in the 'images' directory
            'time': '5 MINUTE READ',
            date: 'MAR 19, 2024'
        },
        {
            'id': 4,
            'title': 'The Importance of Learning PHP',
            'description': 'PHP is a popular server-side scripting language that is widely used for web development. Learning PHP can open up many opportunities...',
            'image': BlogImage, // File path of the image in the 'images' directory
            'time': '5 MINUTE READ',
            date: 'MAR 19, 2024'
        },
        {
            'id': 5,
            'title': 'The Importance of Learning PHP',
            'description': 'PHP is a popular server-side scripting language that is widely used for web development. Learning PHP can open up many opportunities...',
            'image': BlogImage, // File path of the image in the 'images' directory
            'time': "5 MINUTE READ",
            date: 'MAR 19, 2024'
        },
    ])
    let navigate = useNavigate()

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
                    <div onClick={()=> navigate(`/blog/${blog.id}`, {state: blog})} className="card" key={blog.id}>
                            <p className="date">{blog.date}</p>
                            <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className="content">
                                <h4>{blog.title}</h4>
                                {console.log('tet', blog.image)}
                                {/* {showImage && <div><img src={blog.image} className="image-overlay" alt="img-icon" /></div>} */}
                                <p>
                                    {blog.description}
                                </p>
                                <span>
                                    <img src={ArrowIcon} alt="right-arrow-icon" />
                                </span>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage