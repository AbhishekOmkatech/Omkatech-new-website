import React from 'react'
import ArrowDown from '../assets/svgs/Group 32.svg'
import '../components-css/faq.scss'

const Faq = () => {
    return (
        <div className="faq-main-container">
            <h2>FAQ</h2>
            <div className="accordions">
                <div className="accordion">
                    <p>What mobile app development service do you offer?</p>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </div>
                <div className="accordion">
                    <p>What mobile app development service do you offer?</p>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </div>
                <div className="accordion">
                    <p>What mobile app development service do you offer?</p>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </div>
                <div className="accordion">
                    <p>What mobile app development service do you offer?</p>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </div>
                <div className="accordion">
                    <p>What mobile app development service do you offer?</p>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </div>
            </div>
        </div>
    )
}

export default Faq