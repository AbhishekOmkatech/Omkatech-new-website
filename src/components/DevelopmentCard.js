import React, { useState, useEffect } from 'react';
import '../components-css/development-card.scss'; // Assuming you have your CSS file for styling

function DevelopmentCard({servicesData}) {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0); // Initialize with 0 to expand the first card
  const [lastHoveredIndex, setLastHoveredIndex] = useState(0); // State to track the last hovered index

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
      {servicesData?.map((card, index) => (
        <div
          key={index}
          className={`development-card ${expandedCardIndex === index ? 'expanded' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="card-content">
            <img
              src={card.file_path + card.image}
              alt={card.title}
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