import React from 'react'
import comma from '../pngs/comma.png'
import clientImage from '../pngs/Mask group (2).png'
import '../components-css/testimonial.scss'
const Testimonial = () => {
  return (
    <div className="testimonial-main-container">
      <h2>Testominial</h2>
      <div className="clients-review">
        <img src={comma} alt="comma-icon" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ad harum perspiciatis quaerat sed recusandae fuga molestiae! Velit voluptatum sit officia. Maxime unde reprehenderit nesciunt dolorum doloribus quod, modi magni! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ad harum perspiciatis quaerat sed recusandae fuga molestiae! Velit voluptatum sit officia.</p>
          <div className="client-content">
            <div className="client-detail">
              <img src={clientImage} alt="client-image" />
              <div className="about-client">
                <h3>Daniel Rogers</h3>
                <p>CEO, ABC Company</p>
              </div>
            </div>
            <div className="video">
            <iframe
                width="160"
                height="100"
                src="https://www.youtube.com/embed/ICRcTZiAtN4?si=UFFe-aYx_7N9wamq"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial