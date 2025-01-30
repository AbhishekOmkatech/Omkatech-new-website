import React, { useEffect, useState } from 'react';
import '../components-css/about-us.scss';
import axios from 'axios';
import { BASE_URL } from '../config';

function AboutUs() {
    const [aboutData, setAboutData] = useState(null);
    
    const fetchAboutData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/aboutus`);
            console.log('Response About Us:', response); // Log the response here
            setAboutData(response?.data?.data); // Update state
        } catch (error) {
            console.error('Error fetching About Us data:', error);
        }
    };
    useEffect(() => {
        fetchAboutData();
    }, []);

    return (
        <div className='about-main-container'>
            <div className="about">
                <div className="heading">
                    <h1>{aboutData?.home_heading}</h1>
                </div>
                <div className="company-brief">
                    {/* Using dangerouslySetInnerHTML to render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: aboutData?.home_description }} />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
