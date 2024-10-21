import React from 'react'
import '../components-css/certificate-page.scss'
import certificate1Img from '../pngs/certificate1.png'
import certificate2Img from '../pngs/certificate2.png'

const CertificatePage = () => {
  return (
    <div className="certificate-page-container">
      <div className="certificate-images">
        <img src={certificate1Img} alt="certificate-1" />
        <img src={certificate2Img} alt="certificate-2" />
      </div>
    </div>
  )
}

export default CertificatePage