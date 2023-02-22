import React, { Component } from 'react'
import axios from 'axios';
import './wishlist.css'
import WishlistDisplay from './wishlistDisplay'

const wishlistProduct = "https://myntra-clone.onrender.com/myWishList/himanshu@gmail.com"

export default class wishlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wishlistData: []
        } 
    }

    componentDidMount() {
        axios.get(wishlistProduct).then((res) => {
            for (let index = 0; index < res.data.length; index++) {
                axios.get(`https://myntra-clone.onrender.com/product_detail/${res.data[index].product}`)
                .then((response) => {
                    console.log(response.data[0]);
                    this.state.wishlistData.push(response.data[0]);
                })
            }
        })
    }

  render() {
     return (
        <WishlistDisplay wishlist={this.state.wishlistData}/>
     )
  }
}
