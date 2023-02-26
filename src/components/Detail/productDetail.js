import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';
import './productDetail.css'

import loader from '../../images/giphy.gif'

const url = "https://myntra-clone.onrender.com/product_detail/"
const wishlist = "https://myntra-clone.onrender.com/addToWishlist"
//http://localhost:9500/product_detail/

export default class productDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productData: "",
            dom_content: [],
            username: "",
            user_email: ""
        }
    }

    componentDidMount() {
        let productName = this.props.match.params.productName
        console.log(productName);
        
        sessionStorage.setItem("productName", JSON.stringify(productName))
        axios.get(`${url}${productName}`)
        .then((res) => {
            console.log(res.data, productName);
            this.setState({productData: res.data[0]})
            this.productRating(res.data[0].product_rating)
        })
        this.gettingUserInfo()
    }

    gettingUserInfo = () => {
        if (sessionStorage.getItem('access_token') == null) {
            return null;
        } else {
            let user_info = JSON.parse(sessionStorage.getItem('userInfo'))
            this.setState({username: user_info.name, user_email: user_info.email})
        }
    }

    productRating = (data) => {
        const totalRating = 5
        let stars = []
        if (data) {
             for (let i = 0; i < parseInt(data); i++) {
                 stars.push(<i class="fas fa-star" key={i}></i>)
            }

            for (let j = 0; j < totalRating - parseInt(data); j++) {
                console.log(j);
                return (
                    stars.push(<i class="far fa-star" key={parseInt(data) + j}></i>)
                )
            }
        }

        this.state.dom_content.push(stars)
        return stars;
    }

    buyNow = () => {
        if (sessionStorage.getItem('access_token') == null) {
            alert("Please login to place order")
            this.props.history.push('/login')
        } else {
            sessionStorage.setItem("product", this.state.productData.brand)
            this.props.history.push(`/placeOrder/${this.state.productData.brand}`)
        }
    }

    addToWishlist = () => {
        if (sessionStorage.getItem('access_token') == null) {
            alert("Please login to add in wishlist")
            this.props.history.push('/login')
        } else {
            let obj = { 
                id: Math.floor(Math.random() *10000),
                product: this.props.match.params.productName,
                name: this.state.username,
                email: this.state.user_email,
            }
    
            fetch(wishlist, {
            method: 'POST', 
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
            })
            .then(this.props.history.push(`/wishlist/${obj.email}`))
        }
    }
    

  render() {
    
    return (
        <>
       <Header />
      <div style={{marginTop: 120, display: 'flex'}}>
        <div className="image_section">
            <img className='product_image' src={this.state.productData.thumbnail} 
            alt={this.state.productData.brand} height="500px"/>
        </div>
        {this.state.productData ? 
        <div className="detail_section">
            <h5 style={{letterSpacing: 1, fontSize: 17}}><span class="badge bg-primary">{this.state.productData.category}</span></h5>
            
            <h2 style={{fontWeight: 600}}>{this.state.productData.brand}</h2>
            <p style={{fontSize: 16, marginTop: 15, fontWeight: 500}}>
                {this.state.productData.product_name}
            </p>
            
            <p style={{ fontSize: 16, fontWeight: 500 }}>
                Size: {this.state.productData.size}
            </p>
            <h2><span>&#8377;</span> {this.state.productData.price}.00</h2>

            {console.log(this.state.dom_content)}
            {this.state.dom_content.map((item) => {
                return (
                    item
                )
            })}
            <br />
            <button type="button" class="btn btn-warning wishlist" onClick={this.addToWishlist}>WishList <i class="fas fa-heart"></i></button>
            <button type="button" class="btn btn-success buy_now" onClick={this.buyNow}>Buy Now <i class="fas fa-shopping-cart"></i></button>
            <br />
            <p className='description'>Product Description:</p>
            {/* <p>{this.state.productData.details.description}</p> */}
            <p style={{fontSize: 17}}>
                {this.state.productData.details.description}
            </p>
            
            <div>
                <img src="https://www.linkpicture.com/q/360_F_216482277_gPKPcj9vdGlGi05LYCrtsWphZssLsIUO.jpg" alt="verified" height="90px" style={{display: 'inline-block'}}/>
                <p style={{display: 'inline-block', marginLeft: 20}}>{this.state.productData.details.verify}</p>
            </div>
        </div>
        : <img src={loader} alt="loading..." style={{height: 220, marginTop: 130}}/>
            }
      </div>
        </>
    )
  }
}
