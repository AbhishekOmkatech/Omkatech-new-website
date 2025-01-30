import React, { useState } from 'react';
// import ArrowIcon from '../assets/svgs/Group 3.svg';
// import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'
import Contact from '../pngs/Group 126.png';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import '../components-css/contact-us.scss';
import { BASE_URL } from '../config';
import axios from 'axios';

const ContactUs = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState(''); // Holds the country code
    const [phoneNumber, setPhoneNumber] = useState(''); // Holds the full phone number

    const sendEmail = async () => {
        const payload = {
            name: '', // Populate with actual form values
            email: '', // Populate with actual form values
            countryCode: selectedCountryCode,
            phone: phoneNumber,
            services: selectedServices,
            message: '', // Populate with actual message value
        };

        try {
            const response = await axios.post(`${BASE_URL}/contact-us`, payload);
            console.log('Contact response:', response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const toggleHighlight = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((item) => item !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const services = [
        'Mobile app Development',
        'Web Design & Development',
        'Software Development',
        'SEO',
        'UI/UX Design',
        'Digital Marketing',
        'IT Manage Services',
    ];

    return (
        <div className="contact-us-main-container">
            <div className="contact-us">
                <div className="image">
                    <img src={Contact} alt="contact-us-img" />
                </div>
                <div className="your-name">
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="your-name">
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="your-name">
                    <PhoneInput
                        country={'us'} // Default country
                        value={phoneNumber}
                        onChange={(phone, { dialCode }) => {
                            setPhoneNumber(phone);
                            setSelectedCountryCode(dialCode); // Extract country code
                        }}
                        placeholder="Enter phone number"
                        enableSearch={true} // Allow country search
                        inputClass="phone-input" // Add custom styles
                        dropdownClass="phone-dropdown"
                    />
                </div>
                <div className="your-name">
                    <textarea placeholder="Tell us about your project" />
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
                    <button
                        className="btn-bg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={sendEmail}
                    >
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
