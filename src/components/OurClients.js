import React, { useState } from 'react';
import '../components-css/our-clients.scss';
import cleanToGreen from '../pngs/Logo (Black & White)/01.png';
import Retv from '../pngs/Logo (Black & White)/02.png';
import Rlg from '../pngs/Logo (Black & White)/03.png';
import Indegenous from '../pngs/Logo (Black & White)/04.png';
import Cosmax from '../pngs/Logo (Black & White)/05.png';
import TheLash from '../pngs/Logo (Black & White)/06.png';
import Annakiki from '../pngs/Logo (Black & White)/07.png';
import Strategic from '../pngs/Logo (Black & White)/08.png';
import Expansive from '../pngs/Logo (Black & White)/09.png';
import colorCleanToGreen from '../pngs/Logo (Colored)/01.1.png'
import colorRetv from '../pngs/Logo (Colored)/02.2.png';
import colorRlg from '../pngs/Logo (Colored)/03.3.png';
import colorIndegenous from '../pngs/Logo (Colored)/04.4.png';
import colorCosmax from '../pngs/Logo (Colored)/05.5.png';
import colorTheLash from '../pngs/Logo (Colored)/06.6.png';
import colorAnnakiki from '../pngs/Logo (Colored)/07.7.png';
import colorStrategic from '../pngs/Logo (Colored)/08.8.png';
import colorExpansive from '../pngs/Logo (Colored)/09.png';

function OurClients({brandsData}) {
    const [hoveredLogo, setHoveredLogo] = useState(null);

    const BrandsLogo = [
        { logo: cleanToGreen, colorLogo: colorCleanToGreen },
        { logo: Retv, colorLogo: colorRetv },
        { logo: Rlg, colorLogo: colorRlg },
        { logo: Indegenous, colorLogo: colorIndegenous },
        { logo: Cosmax, colorLogo: colorCosmax },
        { logo: TheLash, colorLogo: colorTheLash },
        { logo: Annakiki, colorLogo: colorAnnakiki },
        { logo: Strategic, colorLogo: colorStrategic },
        { logo: Expansive, colorLogo: colorExpansive }
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
                    {brandsData.map((brand, index) => (
                        <div
                            className="img"
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* <img
                                src={hoveredLogo === index ? brand.colorLogo : brand.logo}
                                alt={`Brand ${index + 1}`}
                            /> */}
                            <img src={brand.file_path + brand.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurClients;
