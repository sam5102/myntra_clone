import React from 'react'
import { Link } from 'react-router-dom'

const WishlistDisplay = (props) => {

    const renderData = ({wishlist}) => {
        if (wishlist) {
            if (wishlist.length > 0) {
                return wishlist.map((item) => {
                    return (
                        <div className="card" style={{width: '18rem', marginLeft: 70}} key={item._id}>
                            <div style={{position: 'relative'}}>
                                <img id="card_img" src={item.thumbnail} className="card-img-top" alt="model" height="350px" />
                                <div id="item"><i className="fa-regular fa-heart"></i></div>
                                <div id="rating"><span>{item.product_rating} <i className="fa-regular fa-star"></i></span></div>
                            </div>
                            <Link to={'/product/' + item.brand} key={item._id} style={{textDecoration: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontWeight: 600, letterSpacing: 2}}>{item.brand}</h5>
                                    <p className="card-text" style={{letterSpacing: 0.5, fontWeight: 500, fontSize: 16}}>{item.product_name}</p>
                                    <p className="card-text" style={{letterSpacing: 1}}>Rs. {item.price} <s>Rs {Number(item.price)+500}</s></p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            } else {
                <h3>Loading Data......</h3>
            }
        } else {
            <h2>No data found</h2>
        }
    }
  return (
    <div style={{display: 'flex', marginTop: 100}}>
        {renderData(props)} 
    </div>
  )
}

export default WishlistDisplay