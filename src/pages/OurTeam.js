import React, { useState } from 'react'
import img1 from '../pngs/Mask group (3).png'
import groupPhoto1 from '../pngs/Rectangle 82.png'
import groupPhoto2 from '../pngs/Rectangle 83.png'
import groupPhoto3 from '../pngs/Rectangle 84.png'
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

import '../components-css/our-team.scss'

const OurTeam = () => {
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
  return (
    <div className='our-team-main-container'>
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
      <div className="our-office-culture">
        <h3>OUR OFFICE CULTURE - <b>IT’S AMAZING!!</b></h3>
        <p>That is why we are here. It is the reason we arrive to work each day. Every team at this organization relies on the immensely bright individuals that make up their ranks, from designers, marketing to customer service representatives.</p>
        <div className="images">
          <div className="left-img">
            <img src={groupPhoto1} alt="group-photo" />
          </div>
          <div className="right-img">
            <img className='group-2' src={groupPhoto2} alt="group-photo" />
            <img src={groupPhoto3} alt="group-photo" />
          </div>
        </div>
      </div>
      <div className="meet-our-team">
        <h2>MEET OUR TEAM</h2>
        <div className="company-employees">
          <div className="single-company-employee">
            {teamPhotos.map((team, index) => (
              <div className="about-employee" key={index}>
                <img src={team.img} alt={team.name} />
                <h3>{team.name}</h3>
                <p>{team.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam