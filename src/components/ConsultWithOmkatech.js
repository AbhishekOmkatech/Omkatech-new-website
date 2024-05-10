import React from 'react'
import '../components-css/consult-with-omkatech.scss'

const ConsultWithOmkatech = () => {
  return (
    <div className='consult-main-container'>
        <div className="top-footer-part">
        <h1>Consult with <b>OMKA TECH!</b></h1>
        <p>Book Your First Presentation with Our <b>Experts Today.</b></p>
        <div className='input-container'>
          <input type="text" placeholder='Email Address' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ConsultWithOmkatech