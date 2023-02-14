import React from 'react';
import './OmgDeals.css'

import omgHeading from "../../images/omg data/omg.jpg"
import image1 from "../../images/omg data/1.png"
import image2 from "../../images/omg data/2.png"
import image4 from "../../images/omg data/4.png"
import image5 from "../../images/omg data/5.png"
import image6 from "../../images/omg data/6.png"
import image7 from "../../images/omg data/7.png"
import image8 from "../../images/omg data/8.png"
import image9 from "../../images/omg data/9.png"
import image10 from "../../images/omg data/10.png"

const OmgDeals = () => {
  return (
    // OMG Deals
        <section id="omg-deals">
            <img src={omgHeading} alt="omg-deals" height="135px" width="40%" 
            style={{marginLeft: '30%', marginBottom: 30, marginTop: 20, borderRadius: 11}} />
            <div>
                <img src={image1} alt="image-1" style={{marginLeft: 10}} />
                <img src={image2} alt="image-2" />
                <img src={image4} alt="image-4" />
                <img src={image5} alt="image-5" />
                <img src={image6} alt="image-6" />
                <img src={image7} alt="image-7" />
                <img src={image8} alt="image-8" />
                <img src={image9} alt="image-9" />
                <img src={image10} alt="image-10" />
            </div>
        </section>
  )
}

export default OmgDeals