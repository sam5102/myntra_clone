import React from 'react'
import './BudgetBuys.css'

import budgetHeading from "../../images/budget buys/budget-buy.jpg"

import image2 from "../../images/budget buys/2.jpg"
import image3 from "../../images/budget buys/3.png"
import image4 from "../../images/budget buys/4.png"
import image5 from "../../images/budget buys/5.png"
import image7 from "../../images/budget buys/7.png"
import image8 from "../../images/budget buys/8.png"
import image9 from "../../images/budget buys/9.png"
import image10 from "../../images/budget buys/10.png"
import image11 from "../../images/budget buys/11.png"

const BudgetBuys = () => {
  return (
    // Budget Buys
        <section id="budget-buys">
            <img src={budgetHeading} alt="budget-buys" height="130px" width="40%" style={{marginLeft: '30%', marginBottom: 30, marginTop: 7, borderRadius: 11}} />
            <div>
                <img src={image2} alt="image-2" style={{marginLeft: 15}} />
                <img src={image3} alt="image-3" />
                <img src={image4} alt="image-4" />
                <img src={image5} alt="image-5" />
                <img src={image7} alt="image-7" />
                <img src={image8} alt="image-8" />
                <img src={image9} alt="image-9" />
                <img src={image10} alt="image-10" />
                <img src={image11} alt="image-11" />
            </div>
        </section>
  )
}

export default BudgetBuys