import React, { useState, useEffect } from 'react';
// import ArrowIcon from '../assets/svgs/Group 3.svg';
// import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import Contact from '../pngs/Group 126.png';
import ReactFlagSelect from 'react-flags-select'
import '../components-css/contact-us.scss'

const ContactUs = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('US'); // Initially set to America (United States)

    const handleSelectCountry = (code) => {
        console.log('code', code)
        setSelectedCountry(code);
    };
    // This function returns the country code based on the selected country
    // const getCountryCode = () => {
    //     // You may implement a logic here to get the country code based on the selectedCountry
    //     // For demonstration, I'm returning a dummy country code
    //     return "+1";
    // };
    // Function to toggle highlighting of a service
    const toggleHighlight = (service) => {
        if (selectedServices.includes(service)) {
            // If already selected, do nothing
            setSelectedServices(selectedServices.filter(item => item !== service));
        } else {
            // If not selected, add it to the array
            setSelectedServices([...selectedServices, service]);
        }
    };

    const services = ["Mobile app Development", "Web Design & Development", "Software Development", "SEO", "UI/UX Design", "Digital Marketing", "IT Manage Services"];

    return (
        <div className="contact-us-main-container">
            <div className="contact-us">
            <div className='image'>
                <img src={Contact} alt="contact-us-img" />
            </div>
                <div className="your-name">
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className="your-name">
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="your-name flag">
                    <div className="flag-select-container">
                        <ReactFlagSelect
                            selected={selectedCountry}
                            onSelect={handleSelectCountry}
                            searchable
                            searchPlaceholder='Search'
                            className='menu-flags'
                        />
                    </div>
                    <div className="phone-number-section">
                        {/* <div>Country Code: {getCountryCode()}</div> */}
                        <div>
                            <input type="tel" placeholder="Enter phone number" />
                        </div>
                    </div>
                </div>
                <div className="your-name">
                    <input type="textarea" placeholder='Tell us about your project' />
                </div>
                <div className="choose-service">
                    <p>Choose your Service</p>
                    <div className="services-container">
                        {services?.map((service, index) => (
                            <div
                                key={index}
                                className={`service ${selectedServices.includes(service) ? 'active' : ''}`}
                                onClick={() => toggleHighlight(service)}
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button">
                    <button className='btn-bg' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <span>Submit</span>
                         {/* <span className='img'>
                            {isHovered ? (
                                <img src={GradientArrowIcon} alt="gradient-icon" />
                            ) : (
                                <img src={ArrowIcon} alt="arrow-icon" />
                            )}
                        </span> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;