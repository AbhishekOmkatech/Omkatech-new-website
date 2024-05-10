import React, {useState} from 'react'
import img1 from '../pngs/Ellipse 23.png'
import img2 from '../pngs/Ellipse 25.png'
import img3 from '../pngs/Ellipse 27.png'
import img4 from '../pngs/Ellipse 28.png'
import img5 from '../pngs/Ellipse 29.png'
import BlackComma from '../assets/svgs/black-comma.svg'
import Slider from 'react-slick';
import clientImg from '../pngs/Ellipse 30.png'
import smileVideo from '../pngs/smile.mp4'
import leftArrow from '../assets/svgs/Vector.svg';
import rightArrow from '../assets/svgs/Vector (1).svg';
import VinitImg from '../pngs/Vinit.png'
import KarinaImg from '../pngs/Karina.png'
import SauravImg from '../pngs/Saurav.png'
import SandhyaImg from '../pngs/Sandhya.png'
import RishabhImg from '../pngs/Rishabh.png'
import PoojaImg from '../pngs/Pooja.png'
import MohitImg from '../pngs/Mohit.png'
import ShikhaImg from '../pngs/Shikha.png'
import DiwakarImg from '../pngs/Diwakar.png'
import RohitImg from '../pngs/Rohit.png'
import ShubhamImg from '../pngs/Shubham.png'
import AyushiImg from '../pngs/Ayushi.png'
import VinodImg from '../pngs/Vinod.png'
import ManishImg from '../pngs/Manish.png'
import AnchalImg from '../pngs/Anchal.png'
import NitinImg from '../pngs/Nitin.png'
import AshishImg from '../pngs/Ashish.png'
import SimranImg from '../pngs/Simran.png'
import MuskanImg from '../pngs/Muskan.png'
import '../components-css/our-testimonial-page.scss'

const OurTestimonialPage = () => {
  const happyClients = [
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    },
    {
      comment: 'Exceed our expectations with innovative design that brought our vision to life - a truly remarkable creative agency.',
      client_img: clientImg,
      client_name: 'Samantha Johnson',
      client_company_name: 'CEO of ABC Company'
    }
  ]
  const clientVideos = [
    'https://www.youtube.com/embed/VxUSHDLyTho?si=Ofkszbpa_aSdb8xd',
    'https://www.youtube.com/embed/XRghryoXxuU?si=otkqRoalp7JLMAVo',
    'https://www.youtube.com/embed/ICRcTZiAtN4?si=5IVhQjdnoBZ_p1Td',
    'https://www.youtube.com/embed/ICRcTZiAtN4?si=O98o1WkkVQtUVpZC'
  ]
  const [teamPhotos, setTeamPhotos] = useState([
    {
      name: "Saurav",
      designation: 'Finance Manager',
      img: SauravImg,
    },
    {
      name: "Karina Bakshi",
      designation: 'HR Executive',
      img: KarinaImg,
    },
    {
      name: "Sandhya Kumari",
      designation: 'Senior UX/UI Designer',
      img: SandhyaImg,
    },
    {
      name: "Rishabh Madan",
      designation: 'Full Stack Developer (US)',
      img: RishabhImg,
    },
    {
      name: "Vinit Vijayran",
      designation: 'Full Stack Developer',
      img: VinitImg,
    },
    {
      name: "Pooja Arya",
      designation: 'Lead Php Software Developer',
      img: PoojaImg,
    },
    {
      name: "Mohit Kumar",
      designation: 'Php Developer',
      img: MohitImg,
    },
    {
      name: "Shikha Pal",
      designation: 'Php Developer',
      img: ShikhaImg,
    },
    {
      name: "Diwakar Kumar",
      designation: 'Senior Frontend Developer',
      img: DiwakarImg,
    },
    {
      name: "Rohit Satyarthi",
      designation: 'Frontend Developer',
      img: RohitImg,
    },
    {
      name: "Shubham Tanwar",
      designation: 'Flutter Mobile App Developer',
      img: ShubhamImg,
    },
    {
      name: "Ayushi Bhatnagar",
      designation: 'Flutter Developer',
      img: AyushiImg,
    },
    {
      name: "Vinod Kumar",
      designation: 'Manual Tester',
      img: VinodImg,
    },
    {
      name: "Manish Singh",
      designation: 'Digital Marketing Executive',
      img: ManishImg,
    },
    {
      name: "Anchal Srivastava",
      designation: 'Digital Marketing Specialist',
      img: AnchalImg,
    },
    {
      name: "Nitin Sahu",
      designation: 'Email Marketing Executive',
      img: NitinImg,
    },
    {
      name: "Ashish Pratap",
      designation: 'Email Marketing Specialist',
      img: AshishImg,
    },
    {
      name: "Simran Mehta",
      designation: 'Email Marketing Specialist',
      img: SimranImg,
    },
    {
      name: "Muskan Tomar",
      designation: 'Business Development Executive',
      img: MuskanImg,
    }
  ])
  // Slick Slider settings
  const settings = {
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='Our-testimonial-page-main-container'>
      <div className="core-team-container">
        <div className="left-content">
          <h1>OUR CORE TEAM</h1>
          <p>Meet an exceptional team of technology advisors, growth facilitators, and subject matter experts with proven experience.</p>
        </div>
        <div className="right-content">
          {teamPhotos.map((team, index) => (
            <img key={index} src={team.img} alt={team.name} />
          ))}
        </div>
      </div>
      {/* <div className="our-testimonial-banner">
        <div className="testimonial-left-content">
          <h1>OUR TESTIMONIALS</h1>
          <p>Words of praise from others about our presence.</p>
        </div>
        <div className="testimonial-right-content">
          <img className="testimonial-image" src={img3} alt="img-1" />
          <img className="testimonial-image" src={img1} alt="img-1" />
          <img className="testimonial-image" src={img1} alt="img-1" />
          <img className="testimonial-image" src={img4} alt="img-1" />
          <img className="testimonial-image" src={img5} alt="img-1" />
          <img className="testimonial-image" src={img1} alt="img-1" />
          <img className="testimonial-image" src={img2} alt="img-1" />
        </div>
      </div> */}
      <div className="happy-clients">
        <h2>Here are some <b> Happy Clients</b> <video className="smiley-rotate" autoPlay loop muted playsInline preload="auto">
          <source type="video/mp4" src={smileVideo} />
          <source type="video/webm" src={smileVideo} />
        </video></h2>
        <div className="happy-clients-cards">
          {happyClients.map((client) => (
            <div className="happy-client-card">
              <img src={BlackComma} alt="black-comma" />
              <p>{client.comment}</p>
              <div className="about-client">
                <img src={client.client_img} alt="client-img" />
                <div className="client-content">
                  <h5>{client.client_name}</h5>
                  <p>{client.client_company_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="client-say-about-us">
          <h2>What Our <b>Client</b> SayAbout Us</h2>
          <Slider {...settings}>
            {clientVideos.map((videoUrl, index) => (
              <iframe
                key={index}
                width="408"
                height="275"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slider-buttons testimonial mt">
      <div className="slider-button-left" onClick={onClick}><img src={leftArrow} alt="left-arrow-icon" /></div>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slider-buttons testimonial mt">
      <div className="slider-button-right" onClick={onClick}><img src={rightArrow} alt="right-arrow-icon" /></div>
    </div>
  );
};

export default OurTestimonialPage