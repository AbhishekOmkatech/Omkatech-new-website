import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ArrowDown from '../assets/svgs/Group 32.svg';
import '../components-css/faq.scss';
import { BASE_URL } from '../config';
import axios from 'axios';

const Faq = () => {
    const [faqData, setFaqData] = useState([]);
    const contentRefs = useRef([]);

    // Fetch FAQ data from the API
    const getFaqData = async () => {
        try {
            let response = await axios.get(`${BASE_URL}/faq`);
            const dataWithIsOpen = response.data.data.map((item) => ({
                ...item,
                isOpen: false, // Add a default isOpen key for local state management
            }));
            setFaqData(dataWithIsOpen);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFaqData();
    }, []);

    const toggleAccordion = (index) => {
        const updatedFaqData = faqData.map((item, i) => ({
            ...item,
            isOpen: i === index ? !item.isOpen : false, // Toggle only the clicked accordion
        }));

        setFaqData(updatedFaqData);

        updatedFaqData.forEach((item, i) => {
            const contentRef = contentRefs.current[i];
            if (item.isOpen) {
                gsap.to(contentRef, { height: 'auto', duration: 0.2, ease: 'power3.inOut' });
            } else {
                gsap.to(contentRef, { height: '0px', duration: 0.2, ease: 'power3.inOut' });
            }
        });
    };

    return (
        <div className="faq-main-container">
            <h2>FAQ</h2>
            <div className="accordions">
                {faqData.map((accordion, index) => (
                    <div className="accordion" key={index} onClick={() => toggleAccordion(index)}>
                        <div className="heading">
                            <p>{accordion?.heading}</p>
                            <img
                                className={accordion.isOpen ? 'activeFaq' : ''}
                                src={ArrowDown}
                                alt="arrow-down-icon"
                            />
                        </div>
                        <div
                            className="content"
                            ref={(element) => (contentRefs.current[index] = element)}
                            style={{ overflow: 'hidden', height: 0 }}
                        >
                            <p>{accordion?.subheading}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
