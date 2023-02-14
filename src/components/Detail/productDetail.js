import React, { Component } from 'react'
import axios from 'axios';
import './productDetail.css'

const url = "http://localhost:9500/product_detail/"

export default class productDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productData: "",
            dom_content: []
        }
    }

    componentDidMount() {
        let productName = this.props.match.params.productName
        console.log(productName);
        
        sessionStorage.setItem("productName", productName)
        axios.get(`${url}${productName}`)
        .then((res) => {
            console.log(res.data, productName);
            this.setState({productData: res.data[0]})
            this.productRating(res.data[0].product_rating)
        })
              
    }

    productRating = (data) => {
        const totalRating = 5
        if (data) {
             for (let i = 0; i < parseInt(data); i++) {
                 this.state.dom_content.push(<i class="fas fa-star" key={i}></i>)
            }

            for (let j = 0; j < totalRating - parseInt(data); j++) {
                console.log(j);
                return (
                    this.state.dom_content.push(<i class="far fa-star" key={j}></i>)
                )
            }
        }
    }

    buyNow = () => {
        sessionStorage.setItem("product", this.state.productData.brand)
        this.props.history.push(`/placeOrder/${this.state.productData.brand}`)
    }
    

  render() {
    return (
      <div style={{marginTop: 120, display: 'flex'}}>
        <div className="image_section">
            <img className='product_image' src={this.state.productData.thumbnail} 
            alt={this.state.productData.brand} height="500px"/>
        </div>
        <div className="detail_section">
            <h5 style={{letterSpacing: 1, fontSize: 22}}><span class="badge bg-primary">{this.state.productData.category}</span></h5>
            
            <h1 style={{fontWeight: 600}}>{this.state.productData.brand}</h1>
            <p style={{fontSize: 18, marginTop: 15, fontWeight: 500}}>
                {this.state.productData.product_name}
            </p>
            
            <p style={{ fontSize: 18, fontWeight: 500 }}>
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
            <button type="button" class="btn btn-warning wishlist">Add To WishList <i class="fas fa-heart"></i></button>
            <button type="button" class="btn btn-success buy_now" onClick={this.buyNow}>Buy Now <i class="fas fa-shopping-cart"></i></button>
            <br />
            <p className='description'>Product Description:</p>
            {/* <p>{this.state.productData.details.description}</p> */}
            <p style={{fontSize: 22}}>
                boAt Stone 193 5W Portable Bluetooth Speaker (IPX7 Water Resistant, 4 Hours Playtime, Black)
            </p>
        </div>
      </div>
    )
  }
}
