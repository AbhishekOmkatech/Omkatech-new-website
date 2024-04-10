import React from 'react'
import ArrowIcon from '../assets/svgs/Group 3.svg'
import '../components-css/our-services.scss'

function OurServices() {
  return (
    <div className='service-main-container'>
        <h1>We Create New Solutions and Transform <br /> Existing Ones with a Development Process That <br /> Beats Industry-Best Timelines</h1>
        <div className="button">
            <button>
                Our Services <span><img src={ArrowIcon} alt="arrow-icon" /></span>
            </button>
        </div>
    </div>
  )
}

export default OurServices