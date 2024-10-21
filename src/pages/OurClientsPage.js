import React from 'react';
import '../components-css/our-clients-page.scss';
import colorCleanToGreen from '../pngs/04 Clean to green.png';
import colorRetv from '../pngs/09 RETV.png';
import colorRlg from '../pngs/Frame 10.png';
import colorIndegenous from '../pngs/07 Indigenious app.png';
import colorCosmax from '../pngs/01 Cosmax.png';
import colorTheLash from '../pngs/05 The-Lash-sUPPLY.png';
import colorAnnakiki from '../pngs/06 ANNAKIKI.png';
import colorStrategic from '../pngs/08 Strategic Solar.png';
import Expansive from '../pngs/Expansive.png'
import Iceland from '../pngs/Iceland.png'
import Kidsta from '../pngs/Kidsta.png'
import Marsiko from '../pngs/Marsiko.png'
import Coffee from '../pngs/coffee.png'
import Candidate from '../pngs/Candidate.png'
import Spotless from '../pngs/Spotless.png'

const OurClientsPage = () => {
  const brandsLogo = [
    { logo: colorRlg },
    { logo: colorCleanToGreen },
    { logo: Expansive },
    { logo: colorIndegenous },
    { logo: Iceland },
    { logo: colorRetv },
    // { logo: Kidsta },
    { logo: colorCosmax },
    { logo: colorAnnakiki },
    { logo: colorTheLash },
    { logo: colorStrategic },
    { logo: Marsiko },
    // { logo: Coffee },
    { logo: Candidate },
    // { logo: Spotless }
  ];

  return (
    <div className='our-clients-page-main-container'>
      <div className="our-clients-banner">
        <h1>OUR CLIENTS</h1>
        <p>Brands You trust, Trust US!</p>
      </div>
      <div className="all-brands">
        {brandsLogo?.map((brandlogo, index) => (
          <div className="img" key={index}>
            <img src={brandlogo.logo} alt={`brand-logo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientsPage;
