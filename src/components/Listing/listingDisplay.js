import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
import { notification } from 'antd';
import './listing.css'

import loader from '../../images/giphy.gif'

const wishlist = "https://myntra-clone.onrender.com/addToWishlist"
const ListingDisplay = (props) => {
    const history = useHistory()

    const addToWishlist = (productName) => {
        if (sessionStorage.getItem('access_token') == null) {
            alert("Please login to add in wishlist")
            history.push('/login')
        } else {
            let user_info = JSON.parse(sessionStorage.getItem('user_info'))
            let obj = { 
                id: Math.floor(Math.random() *10000),
                product: productName,
                name: user_info.name,
                email: user_info.email,
            }
    
            fetch(wishlist, {
            method: 'POST', 
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            })
            .then(() => {
                notification.open({
                    message: productName + 'added to your wishlist',
                    placement: "bottomLeft"
                  });
            })
        }
    }

    const renderData = ({listData}) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        <div className="card" style={{width: '18rem'}} key={item._id}>
                            <div style={{position: 'relative'}}>
                                <img id="card_img" src={item.thumbnail} className="card-img-top" alt="model" height="350px" />
                                <div id="wishlist">
                                    <i className="fa-regular fa-heart" onClick={() => addToWishlist(item.brand)}></i>
                                </div>
                                <div id="rating"><span>{item.product_rating} <i className="fa-regular fa-star"></i></span></div>
                            </div>
                            <Link to={'/product/' + item.brand} key={item._id} style={{textDecoration: 'none'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontWeight: 600, letterSpacing: 2}}>{item.brand}</h5>
                                    <p className="card-text" style={{letterSpacing: 0.5, fontWeight: 500, fontSize: 16}}>{item.product_name}</p>
                                    <p className="card-text" style={{letterSpacing: 1}}>Rs. {item.price} <s>Rs {Number(item.price)+500}</s> <span style={{fontWeight: 600, letterSpacing: 1}}> ({Math.round((Number(item.price)/parseInt(Number(item.price) + 500))*100)}% OFF)</span></p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            } else {
                return (
                    <img src={loader} alt="loading..." style={{height: 220, marginTop: 130}}/>
                )
            }
        } else {
            return (
                <h3>Loading Data.....</h3>
            )
        }
    }

    const brands = ({listData}) => {
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (
                        <div key={item._id}>
                            <input type="radio" name="options" id="all" /><span style={{letterSpacing: 1}}>{item.brand}</span>
                        </div>
                    )
                })
            }
        } else {
            console.log('no data founds');
        }
    }

  return (
    <div className="contner">
        <div id="filter">
            <h4>Filters</h4>
            <hr />
            <h5 style={{letterSpacing: 2}}>Brands</h5>
            {brands(props)}
            {/* <div>
                <input type="radio" name="options" id="all" /><span>Roadster</span>
            </div>
            <div>
                <input type="radio" name="options" id="north indian" /><span>Allen Solly</span>
            </div>
            <div>
                <input type="radio" name="options" id="south indian" /><span>Louis Phillipe</span>
            </div>
            <div>
                <input type="radio" name="options" id="chinese" /><span>Arrow</span>
            </div>
            <div>
                <input type="radio" name="options" id="fast-food" /><span>Van Heusen</span>
            </div> */}
            {/* <hr /> */}
            <h5 style={{letterSpacing: 2}}>Price</h5>
            <div>
                <input type="radio" name="options" id="all" /><span style={{letterSpacing: 1}}>Rs. 226 to Rs. 5920</span>
            </div>
            <div>
                <input type="radio" name="options" id="north indian" /><span style={{letterSpacing: 1}}>Rs. 5920 to Rs. 11614</span>
            </div>
            <div>
                <input type="radio" name="options" id="south indian" /><span style={{letterSpacing: 1}}>Rs. 11614 to Rs. 17308</span>
            </div>
       
            {/* <hr /> */}
            <h5 style={{letterSpacing: 2}}>Color</h5>
            <div>
                <input type="radio" name="options" id="all" /><span style={{letterSpacing: 1}}>Blue</span>
            </div>
            <div>
                <input type="radio" name="options" id="north indian" /><span style={{letterSpacing: 1}}>White</span>
            </div>
            <div>
                <input type="radio" name="options" id="south indian" /><span style={{letterSpacing: 1}}>Navy Blue</span>
            </div>
            <div>
                <input type="radio" name="options" id="fast-food" /><span style={{letterSpacing: 1}}>Black</span>
            </div>
            <div>
                <input type="radio" name="options" id="street-food" /><span style={{letterSpacing: 1}}>Grey</span>
            </div>
            <div>
                <input type="radio" name="options" id="street-food" /><span style={{letterSpacing: 1}}>Pink</span>
            </div>
        </div>

        <div id="content">
            {renderData(props)}
        </div>

        {/* <nav aria-label="Page navigation example" id="pagination">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item"><a class="page-link" href="#">7</a></li>
                <li class="page-item"><a class="page-link" href="#">8</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav> */}
    </div>
  )
}

//style={{ objectFit: 'none' }}

export default ListingDisplay