import React from 'react'
import './Banner.css'
import winterBanner from '../../images/winter_sale.jpg'
import bannerGif from '../../images/banner-3.gif'

const Banner = () => {
  return (
    <>
        {/* Background Banner*/}
        <section id="banner">
            <img src={winterBanner} alt="banner" height="100%" width="100%" />
        </section>

        {/* Background Banner Section*/}
        <section id="banner-2">
            <img src={bannerGif} alt="banner" height="100%" width="100%" />
        </section>
    </>
  )
}

export default Banner