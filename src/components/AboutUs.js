import React from 'react';
import '../components-css/about-us.scss';

function AboutUs(props) {
    const { aboutUsData } = props;

    return (
        <div className='about-main-container'>
            <div className="about">
                <div className="heading">
                    <h1>{aboutUsData?.heading}</h1>
                </div>
                <div className="company-brief">
                    {/* Using dangerouslySetInnerHTML to render HTML content */}
                    <div dangerouslySetInnerHTML={{ __html: aboutUsData?.description }} />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
