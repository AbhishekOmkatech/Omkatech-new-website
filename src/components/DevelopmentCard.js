import React, { useState, useEffect } from 'react';
import '../components-css/development-card.scss'; // Assuming you have your CSS file for styling
import image1 from '../pngs/1.2.png'
import image2 from '../pngs/2.2.png'
import image3 from '../pngs/3.2.png'
import image4 from '../pngs/4.2.png'
import image5 from '../pngs/5.2.png'
import image6 from '../pngs/6.2.png'
import image7 from '../pngs/7.2.png'

function DevelopmentCard() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0); // Initialize with 0 to expand the first card
  const [lastHoveredIndex, setLastHoveredIndex] = useState(0); // State to track the last hovered index
  const cards = [
    {
      title: 'Branding & Designing',
      imageUrl: image1
    },
    {
      title: 'Web Design & Development',
      imageUrl: image2
    },
    {
      title: 'Mobile App Development',
      imageUrl: image3
    },
    {
      title: 'Enterprise Software Development',
      imageUrl: image4
    },
    {
      title: 'Business Consultation',
      imageUrl: image5
    },
    {
      title: 'Maintainance & Support',
      imageUrl: image6
    },
    {
      title: 'Digital Transformation',
      imageUrl: image7
    }
  ];

  useEffect(() => {
    // Expand the first card after the component mounts
    setExpandedCardIndex(0);
  }, []);

  const handleMouseEnter = (index) => {
    setExpandedCardIndex(index);
    setLastHoveredIndex(index); // Update last hovered index
  };

  const handleMouseLeave = (index) => {
    setExpandedCardIndex(lastHoveredIndex === 0 ? 0 : index); // Reset expanded card to the first card or last hovered card
  };

  return (
    <div className="development-card-list">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`development-card ${expandedCardIndex === index ? 'expanded' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="card-content">
            <img
              src={card.imageUrl}
              alt={card.title}
              style={{ filter: expandedCardIndex === index ? 'none' : 'blur(1px)', opacity: expandedCardIndex === index ? 1 : 0.8 }}
              />
              {expandedCardIndex !== index && <div><h2 className='close-title'>{card.title}</h2></div>}
              {expandedCardIndex !== index && (
              <div className="black-close-overlay"></div>
            )}
            {expandedCardIndex === index && (
              <div className="text-content">
                <h2>{card.title}</h2>
              </div>
            )}
            {expandedCardIndex === index && (
              <div className="black-overlay"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevelopmentCard;