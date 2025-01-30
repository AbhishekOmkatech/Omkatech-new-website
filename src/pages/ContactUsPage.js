import React, { useState } from 'react';
import kite from '../pngs/Group 274 1.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import styles for PhoneInput
import '../components-css/contact-us.scss';
import axios from 'axios';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');
    const [selectedInterestedServices, setSelectedInterestedServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const postContact = async () => {
        if (!name || !email || !phone || !project) {
            setErrorMessage('All fields are required.');
            return;
        }

        let payload = {
            name,
            email,
            number: '+' + phone,
            about_project: project,
            service: selectedServices
        };

        try {
            let response = await axios.post('https://newomkatech.omkatech.in/api/contact-us', payload);
            setName('');
            setEmail('');
            setPhone('');
            setProject('');
            setSelectedServices([]);
            setSuccessMessage('Your message has been sent successfully!');
            console.log('Response:', response);
        } catch (error) {
            console.log('Error:', error);
            setErrorMessage('Failed to send your message. Please try again.');
        }
    };

    const toggleHighlight = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]
        );
    };

    const services = [
        'Mobile App Development',
        'Web Design & Development',
        'Software Development',
        'SEO',
        'UI/UX Design',
        'Digital Marketing',
        'IT Managed Services',
    ];

    return (
        <div className="contact-us-main-container">
            <div className="contact-heading">
                <h1>
                    Hey! <b>Tell us</b> all <br /> the things
                </h1>
                <img src={kite} alt="kite-png" />
            </div>
            <div className="contact-us">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="your-name">
                    <input
                        type="text"
                        value={name}
                        placeholder="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className="your-name">
                    <input
                        type="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="your-name flag">
                    <PhoneInput
                        country="in" // Default country
                        value={phone} // State value
                        onChange={(phone) => setPhone(phone)} // State update on change
                        inputStyle={{
                            width: '100%',
                            paddingLeft: '48px', // Adjust padding to prevent overlap with the flag
                            fontSize: '20px',
                            color: '#7F7F7F'
                        }}
                        placeholder="Enter phone number" // Ensure placeholder is set
                        enableSearch={true} // Optional: Adds a search box for country selection
                        searchPlaceholder="Search country" // Placeholder for the search box
                        />
                </div>
                <div className="your-name">
                    <input type="textarea" value={project} onChange={(e) => { setProject(e.target.value) }} placeholder='Tell us about your project' />

                </div>
                <div className="choose-service">
                    <p>Choose your Service</p>
                    <div className="services-container">
                        {services.map((service, index) => (
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
                    {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="button">
                    <button
                        onClick={postContact}
                        className="btn-bg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        >
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
