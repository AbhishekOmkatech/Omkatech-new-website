import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import ArrowDown from '../assets/svgs/Group 32.svg';
import '../components-css/faq.scss';

const Faq = ({ faqData }) => {
    const [accordions, setAccordions] = useState(faqData);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        const updatedAccordions = accordions?.map((accordion, i) => {
            if (i === index) {
                accordion.isOpen = !accordion.isOpen;
            } else {
                accordion.isOpen = false;
            }
            return accordion;
        });

        setAccordions(updatedAccordions);

        updatedAccordions.forEach((accordion, i) => {
            const contentRef = contentRefs.current[i];
            if (accordion.isOpen) {
                gsap.to(contentRef, { height: 'auto', duration: 0.2, ease: 'power3.inOut' });
            } else {
                gsap.to(contentRef, { height: 0, duration: 0.2, ease: 'power3.inOut' });
            }
        });
    };

    return (
        <div className="faq-main-container">
            <h2>FAQ</h2>
            <div className="accordions">
                {accordions?.map((accordion, index) => (
                    <div className="accordion" key={index} onClick={() => toggleAccordion(index)}>
                        <div className="heading">
                            <p>{accordion?.heading}</p>
                            <img className={accordion.isOpen ? 'activeFaq' : ''} src={ArrowDown} alt="arrow-down-icon" />
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
