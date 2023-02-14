import React from 'react'
import './LovedBrands.css'

import brandsHeading from "../../images/top categories/1.jpeg"

import image2 from "../../images/top categories/2.png"
import image3 from "../../images/top categories/3.png"
import image4 from "../../images/top categories/4.png"
import image5 from "../../images/top categories/5.png"
import image6 from "../../images/top categories/6.png"
import image7 from "../../images/top categories/7.png"
import image8 from "../../images/top categories/8.png"
import image9 from "../../images/top categories/9.png"
import image10 from "../../images/top categories/10.png"
import image11 from "../../images/top categories/11.png"
import image12 from "../../images/top categories/12.png"
import image13 from "../../images/top categories/13.png"
import image14 from "../../images/top categories/14.png"
import image15 from "../../images/top categories/15.png"

const LovedBrands = () => {
  return (
    //Most Loved Brands
    <section id="top-categories">
        <img src={brandsHeading} alt="most-loved-brands" height="135px" width="41%" 
        style={{marginLeft: '30%', marginBottom: 30, marginTop: 20, borderRadius: 11}} />
        <div>
            <img src={image2} alt="image-2" />
            <img src={image3} alt="image-3" />
            <img src={image4} alt="image-4" />
            <img src={image5} alt="image-5" />
            <img src={image6} alt="image-6" />
            <img src={image7} alt="image-7" />
            <img src={image8} alt="image-8" />
            <img src={image9} alt="image-9" />
            <img src={image10} alt="image-10" />
            <img src={image11} alt="image-11" />
            <img src={image12} alt="image-12" />
            <img src={image13} alt="image-13" />
            <img src={image14} alt="image-14" />
            <img src={image15} alt="image-14" />
        </div>
    </section>
  )
}

export default LovedBrands