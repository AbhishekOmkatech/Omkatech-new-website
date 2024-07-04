import React, { useState } from 'react'
import '../components-css/consult-with-omkatech.scss'
import axios from 'axios'

const ConsultWithOmkatech = () => {
  const [email, setEmail] = useState('')

  const sendEmail = async () => {
    let payload = {
      email: email
    }
    let response = await axios.post('https://newomkatech.omkatech.in/api/consult-with-us', payload)
  }

  return (
    <div className='consult-main-container'>
        <div className="top-footer-part">
        <h1>Consult with <b>OMKA TECH!</b></h1>
        <p>Book Your First Presentation with Our <b>Experts Today.</b></p>
        <div className='input-container'>
          <input type="text" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder='Email Address' />
          <button onClick={sendEmail}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ConsultWithOmkatech