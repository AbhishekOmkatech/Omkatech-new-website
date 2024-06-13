import React, { useState } from 'react';
import comma from '../pngs/comma.png';
import clientImage from '../pngs/Mask group (2).png';
import '../components-css/testimonial.scss';
import Slider from 'react-slick';
// import leftArrow from '../assets/svgs/Vector.svg';
// import rightArrow from '../assets/svgs/Vector (1).svg';

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([
    {
      feedback: "Omka Tech built out a website for me and I am SUPER happy with the results! Their follow up on changes and little things like making sure when I receive a notification from my host are spot on! I've referred them to a few of my colleagues as their service is outstanding. Thanks, Omka Tech Team!",
      clientName: "Cassandra Murray",
      clientPosition: "CEO, ABC Company",
      videoUrl: 'https://www.youtube.com/embed/VxUSHDLyTho?si=Ofkszbpa_aSdb8xd'
    },
    {
      feedback: "Working with OmkaTech has been an absolute game-changer for my business. Great communication and professionalism throughout. Would definitely recommend!",
      clientName: "Ombeni Emanuel",
      clientPosition: "CEO, ABC Company",
      videoUrl: 'https://www.youtube.com/embed/XRghryoXxuU?si=otkqRoalp7JLMAVo'
    },
    {
      feedback: "It has been more than 2 years that I have been working with them. They developed my 2 websites and they are continuously working on Social Media and SEO for me. They are always available for assistance and advice.",
      clientName: "Patricia Wells",
      clientPosition: "CEO, ABC Company",
      videoUrl: 'https://www.youtube.com/embed/ICRcTZiAtN4?si=5IVhQjdnoBZ_p1Td'
    },
    {
      feedback: "Highly recommended because of the professional and timely work they do.",
      clientName: "D Shawn",
      clientPosition: "CEO, ABC Company",
      videoUrl: 'https://www.youtube.com/embed/ICRcTZiAtN4?si=O98o1WkkVQtUVpZC'
    },
    // {
    //   feedback: "Deepak is amazing!! I only starting working with offshore web developers for my business website a year ago - and I will confess the first two India-based firms I worked with were very problematic.  Poor service, poor attitudes, and inflexible.   Luckily, Deepak arrived on the scene.   He rescued me/ my website.... and fixed many of the things that had been done incorrectly on that website.   He did it with grace, superior service, integrity, and friendliness - along with much greater knowledge than my prior two vendors.   He is good at 'translating' high tech language and options for someone (like me) who does not spend her whole life developing websites. He is good for his word.  I can't recommend Deepak more highly.",
    //   clientName: "Kirstin Lynde",
    //   clientPosition: "CEO, ABC Company",
    // },
    {
      feedback: "I worked with Omka Tech on a web app project for the f&b sector. What I can say is that the team at Omka Tech are a great group of people who work around the clock to produce results! They were flexible and willing to make sure that we were satisfied with each milestone. If you are launching a startup project and need a dedicated team for your next tech project, I highly recommend!",
      clientName: "The i-PR Agency",
      clientPosition: "CEO, ABC Company",
    },
    {
      feedback: "I had the best experience working with Omka Tech. The specifications for my app were very intricate and detailed. They were highly skilled and professional in delivering exactly what I asked for! And their prices are the best too. Their level of responsiveness and turnaround time is top tier!",
      clientName: "Cornell Rogers",
      clientPosition: "CEO, ABC Company",
    },
    {
      feedback: "We have a very pleasant experience for working with Omka Tech recently. What I enjoyed most about working with Omka Tech were that: They could listen and provide the services according to our requirements. The CEO is responsible and the key engineer is professional and knowledgeable. They care the results until you satisfy. This is a company that is trustable and good for a long term relationship. If you are looking for a company to provide UI components, I recommend Omka Tech.",
      clientName: "Kirstin Lynde",
      clientPosition: "Michelle Mu",
    },
    {
      feedback: "I am writing this review after using 3 months of SEO services from Omka Tech. I would like to tell that they are very well versed in this field and it really helped me in getting more traffic on my website and sales also increased significantly.",
      clientName: "Calvin Dayna",
      clientPosition: "CEO, ABC Company",
    },
    {
      feedback: "Excellent Job, by this great team, collaborative, supportive and response quickly to queries, .... Great Job",
      clientName: "Caleb Health Inc",
      clientPosition: "CEO, ABC Company",
    },
    {
      feedback: "I would recommend them to everyone who needs an app builder with full skills and the ability to present a finished product.",
      clientName: "Dewry Bradford of ASQUI Ventures, NYC",
      clientPosition: "CEO, ABC Company",
    },
    {
      feedback: "Everyone at Omka Tech were fun to work with. They are creative and worked easily with my ideas. Aastha is very talented and I commend her for the job she did for me.  Deepak kept on top of things, and overall I would say did an outstanding job. I look forward to our continued relationship",
      clientName: "Thomas Jackson",
      clientPosition: "CEO, ABC Company",
    },
  ]);

  // Slick Slider settings
  const settings = {
    // autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <div className="testimonial-main-container">
      <h2>TESTIMONIAL</h2>
      <Slider {...settings}>
        {testimonialData.map((client, index) => (
          <div className="clients-review" key={index}>
            <img src={comma} alt="comma-icon" />
            <div className="content">
              <div className='client-feedback'>{client.feedback}</div>
              <div className="client-content">
                <div className="client-detail">
                  <img src={clientImage} alt="client-image" />
                  <div className="about-client">
                    <h3>{client.clientName}</h3>
                    <p>{client.clientPosition}</p>
                  </div>
                </div>
                {client.videoUrl && <div className="video">
                  <iframe
                    width="160"
                    height="100"
                    src={client.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//       <div className="slider-buttons testimonial">
//           <div className="slider-button-left" onClick={onClick}><img src={leftArrow} alt="left-arrow-icon" /></div>
//       </div>
//   );
// };

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//       <div className="slider-buttons testimonial">
//           <div className="slider-button-right" onClick={onClick}><img src={rightArrow} alt="right-arrow-icon" /></div>
//       </div>
//   );
// };

export default Testimonial;