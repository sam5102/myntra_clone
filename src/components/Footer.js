import React from 'react';
import './Footer.css';

import playStore from "../images/footer/google_play.png";
import appStore from "../images/footer/apple_store.png";

const Footer = () => {
    return (
        // Footer 
        <footer className="text-center text-lg-start bg-light text-muted" id="my_footer">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                 {/*Left*/} 
                <div className="me-5 d-none d-lg-block">
                    <span style={{fontSize: 17}}>Get connected with us on social networks:</span>
                </div>
                {/*Left*/}
        
                {/*Right*/}
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
 
                </div>
                {/*Right*/}
            </section>
            {/* Section: Social media */}
        
            {/* Section: Links */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h5 className="text-uppercase fw-bold mb-4">
                                Myntra Designs Pvt. Ltd.
                            </h5>
                            <p style={{fontSize: 17}}>
                                Prestige Atlanta, 80 Feet Rd, Koramangala 1A Block, Koramangala 3 Block, Koramangala, Bengaluru, Karnataka 560034
                            </p>
                        </div>
        
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h5 className="text-uppercase fw-bold mb-4" style={{color: '#282c3f', fontSize: 15}}>
                                Popular Search
                            </h5>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Makeup</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Dresses</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Sandals</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Shoes</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Jewellery</a>
                            </p>
                        </div>
                        {/* Grid column */}
        
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h5 className="text-uppercase fw-bold mb-4" style={{color: '#282c3f', fontSize: 15}}>
                                Useful links
                            </h5>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Blog</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Carrers</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Site Map</a>
                            </p>
                            <p style={{fontSize: 17}}>
                                <a href="#!" className="text-reset" style={{textDecoration: 'none'}}>Help</a>
                            </p>
                        </div>
                        {/* Grid column */}
        
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <img src={playStore} alt="Download From Google Play Store" 
                            style={{height: 40, marginBottom: 15}} />
                            <img src={appStore} alt="Download From App Store" 
                            style={{height: 45, width: 133}} />
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links */}
        
            {/* Copyright */}
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize: 17}}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://myntra.com/" 
                style={{textDecoration: 'none', fontSize: 17}}>
                    www.myntra.com.
                </a>
                All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer;