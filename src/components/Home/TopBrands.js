import React from 'react'
import './TopBrands.css'

import topBrandHeading from "../../images/top brands/1.jpeg"

import image2 from "../../images/top brands/2.png"
import image3 from "../../images/top brands/3.png"
import image4 from "../../images/top brands/4.png"
import image5 from "../../images/top brands/5.png"
import image6 from "../../images/top brands/6.png"
import image7 from "../../images/top brands/7.png"
import image8 from "../../images/top brands/8.png"

const TopBrands = () => {
  return (
    //Top Brands on offer
    <section id="top-brands">
        <img src={topBrandHeading} alt="top-brands-on-offer" height="135px" width="41%" style={{marginLeft: '30%', marginBottom: 30, borderRadius: 11}} />
        <div>
            <img src={image2} alt="image-2" height="149px" width="113px" />
            <img src={image3} alt="image-3" height="149px" width="113px" />
            <img src={image4} alt="image-4" height="149px" width="113px" />
            <img src={image5} alt="image-5" height="149px" width="113px" />
            <img src={image6} alt="image-6" height="149px" width="113px" />
            <img src={image7} alt="image-7" height="149px" width="113px" />
            <img src={image8} alt="image-8" height="149px" width="113px" />
        </div>
    </section>
  )
}

export default TopBrands