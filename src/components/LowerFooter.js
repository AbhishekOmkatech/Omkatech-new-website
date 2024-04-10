import React from 'react'
import canadaFlag from '../pngs/canada-flag.jpg'
import usaFlag from '../pngs/usa-flag.jpg'
import indiaFlag from '../pngs/india-flag.jpg'
import '../components-css/lower-footer.scss'

const LowerFooter = () => {
    return (
        <div className='lower-footer-main'>
            <div className="footer">
                <div className="USA">
                    <img src={usaFlag} alt="usa-flag" />
                    <span>+1(786) 648-2910</span>
                </div>
                <div className="canada">
                    <img src={canadaFlag} alt="canada-flag" />
                    <span>+1(437) 255-9950</span>
                </div>
                <div className="india">
                    <img src={indiaFlag} alt="india-flag" />
                    <span>+91 9717511913</span>
                </div>
            </div>
        </div>
    )
}

export default LowerFooter