import React from 'react'
import '../components-css/our-clients.scss'
import cleanToGreen from '../pngs/clean-to-green.png'
import Retv from '../pngs/10.png'
import Rlg from '../pngs/04 1.png'
import Indegenous from '../pngs/08.png'
import Kidsta from '../pngs/05.png'
import Cosmax from '../pngs/03 1.png'
import TheLash from '../pngs/06.png'
import Annakiki from '../pngs/07.png'
import Strategic from '../pngs/09.png'

function OurClients() {
    const BrandsLogo = [
        { logo: cleanToGreen },
        { logo: Retv },
        { logo: Rlg },
        { logo: Indegenous },
        { logo: Kidsta },
        { logo: Cosmax },
        { logo: TheLash },
        { logo: Annakiki },
        { logo: Strategic }
    ]
    return (
        <div className='our-clients-main-container'>
            <h1>We've revolutionized your interaction with these global
                giants.</h1>
            <div className="brands-logo">
                <div className="logo">
                    {BrandsLogo.map((brand, index) => (
                        <div className="img" key={index}>
                            <img src={brand.logo} alt={`Brand ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients