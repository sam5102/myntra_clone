import React, { Component } from 'react'
import axios from 'axios';
import './wishlist.css'
import WishlistDisplay from './wishlistDisplay'
import Header from '../Header';

const wishlistProduct = "https://myntra-clone.onrender.com/myWishList/"

export default class wishlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wishlistData: []
        } 
    }

    componentDidMount() {
        let mailId = this.props.match.params.emailId
        axios.get(`${wishlistProduct}${mailId}`).then((res) => {
            res.data.forEach(element => {
                console.log(element, res.data);
                axios.get(`https://myntra-clone.onrender.com/product_detail/${element.product}`)
                .then((response) => {
                    this.setState({wishlistData: [...this.state.wishlistData, response.data[0]] })
                })
            });
        })
    }

  render() {
     return (
        <>
            <Header />
            {this.state.wishlistData ? 
                <WishlistDisplay wishlist={this.state.wishlistData}/> : 
                <h2>No data found</h2> 
            }
        </>
        
     )
  }
}
