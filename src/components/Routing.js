import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home'
import './Routing.css'
import Listing from './Listing/listing'

import couponImage from "../images/coupon/coupon.jpg"
import productDetail from './Detail/productDetail';
import placeOrder from './Orders/placeOrder';
import viewOrders from './Orders/viewOrders';
import wishlist from './wishlist/wishlist';

const Routing = () => {

    const coupon = () => {
        return (
            <div>
                <div id="coupon" style={{position: 'fixed'}}>
                    <div style={{position: 'relative'}}>
                        <button id="coupon_close" onClick="closeCoupon()">&times;</button>
                    </div>
                
                    <img src={couponImage} id="coupon_img" alt="coupon_page" height="100%" width="100%" />
                </div>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:category" component={Listing}/>
            <Route path="/product/:productName" component={productDetail}/>
            <Route path="/placeOrder/:orderName" component={placeOrder}/>
            <Route path="/viewOrders" component={viewOrders}/>
            <Route path="/wishlist/:emailId" component={wishlist}/>
            {/* <Footer /> */}
            {coupon()}
        </BrowserRouter>
        // <BrowserRouter>
        //     <Header />
        //     <Routes>
        //         <Route exact path="/" component={Home}/>
        //         <Route path="/listing/:category" component={Listing}/>
        //         <Route path="/product/:productName" component={productDetail}/>
        //         <Route path="/placeOrder/:orderName" component={placeOrder}/>
        //     </Routes>
        //     {/* <Footer /> */}
        //     {coupon()}
        // </BrowserRouter>
    )
}

export default Routing;