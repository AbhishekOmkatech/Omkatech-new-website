import React, { useState } from 'react';
import '../components-css/our-clients.scss';
import cleanToGreen from '../pngs/clean-to-green.png';
import Retv from '../pngs/10.png';
import Rlg from '../pngs/04 1.png';
import Indegenous from '../pngs/08.png';
import Cosmax from '../pngs/03 1.png';
import TheLash from '../pngs/06.png';
import Annakiki from '../pngs/07.png';
import Strategic from '../pngs/09.png';
import colorCleanToGreen from '../pngs/04 Clean to green.png';
import colorRetv from '../pngs/09 RETV.png';
import colorRlg from '../pngs/Frame 10.png';
import colorIndegenous from '../pngs/07 Indigenious app.png';
import colorCosmax from '../pngs/01 Cosmax.png';
import colorTheLash from '../pngs/05 The-Lash-sUPPLY.png';
import colorAnnakiki from '../pngs/06 ANNAKIKI.png';
import colorStrategic from '../pngs/08 Strategic Solar.png';

function OurClients() {
    const [hoveredLogo, setHoveredLogo] = useState(null);

    const BrandsLogo = [
        { logo: cleanToGreen, colorLogo: colorCleanToGreen },
        { logo: Retv, colorLogo: colorRetv },
        { logo: Rlg, colorLogo: colorRlg },
        { logo: Indegenous, colorLogo: colorIndegenous },
        { logo: Cosmax, colorLogo: colorCosmax },
        { logo: TheLash, colorLogo: colorTheLash },
        { logo: Annakiki, colorLogo: colorAnnakiki },
        { logo: Strategic, colorLogo: colorStrategic }
    ];

    const handleMouseEnter = index => {
        setHoveredLogo(index);
    };

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    };

    return (
        <div className='our-clients-main-container'>
            <h1>We've revolutionized your interaction with these global giants.</h1>
            <div className="brands-logo">
                <div className="logo">
                    {BrandsLogo.map((brand, index) => (
                        <div
                            className="img"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={hoveredLogo === index ? brand.colorLogo : brand.logo}
                                alt={`Brand ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurClients;
