import React, { useState } from 'react';
import '../components-css/popup.scss';
import crossIcon from '../assets/svgs/cross.svg'
import ArrowIcon from '../assets/svgs/Group 3.svg';
import downloadImg from '../assets/svgs/download.svg'
import GradientArrowIcon from '../assets/svgs/Group 3 (5).svg'

const Popup = ({ jobTitle, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);
    { console.log('checking', jobTitle) }
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="cross-icon">
                    <img onClick={onClose} src={crossIcon} alt="" />
                </div>
                <p className='apply'>APPLY FOR JOB</p>
                <h2>{jobTitle}</h2>
                <form>
                    <input type="text" placeholder='Your name' />
                    {/* <input type="email" placeholder='Your email address' /> */}
                    <input type="number" placeholder='Phone' />
                    <input type="number" placeholder='Experience in Year' />
                    <input type="text" placeholder='Current Employer' />
                    <input type="text" placeholder='Notice Period' />
                    {/* <input type="number" placeholder='Current Salary' /> */}
                    <input type="number" placeholder='Expected Salary' />
                </form>
                <input type="file" id="fileInput" class="file-input" />
                <label for="fileInput" class="file-label">
                    <div className="file-type-design">
                        <img src={downloadImg} alt="" />
                        <h2>Please Upload Your CV / Resume</h2>
                    </div>
                </label>
                <p className='update-resume'>If you are unable to submit your details, then please share your recently
                    updated resume at hr@omkatech.com </p>
                <div className="button">
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span>APPLY NOW</span><span className='img'>
                            {isHovered ? (
                                <img src={GradientArrowIcon} alt="gradient-icon" />
                            ) : (
                                <img src={ArrowIcon} alt="arrow-icon" />
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
