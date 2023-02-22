import React, { Component } from 'react';
import './Header.css';
import myntraLogo from '../images/myntra-logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';


const categoryUrl = "https://myntra-clone.onrender.com/categories"
//http://localhost:9500/categories


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            navData: [],
            totalOrders: 0
        }
    }

    componentDidMount() {
        fetch(`${categoryUrl}`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({navData: data})
        })
        this.totalOrders()
        this.checkLocation()
    }

    totalOrders = () => {
        axios.get("https://myntra-clone.onrender.com/viewOrder").then((res) => {
            console.log(res.data);
            this.setState({totalOrders: res.data.length})
        })
    }

    // geo location
     checkLocation = () => {
        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(async (position) => {
                let lat = position.coords.latitude
                let long = position.coords.longitude
                console.log(`Your current lat is ${lat} and long is ${long}`);
            
                //weather api
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
            
                const weatherData = await fetch(url, { method: 'GET' })
                const getData = await weatherData.json()
                const myTime = new Date().getHours()
                var myTemp;
            
                switch (myTime) {
                    case myTime < 12:
                        myTemp = getData.list[0].temp.morn
                        break;
                    case myTime >= 12 && myTime <= 17:
                        myTemp = getData.list[0].temp.day
                        break;
                    case myTime >= 17 && myTime <= 20:
                        myTemp = getData.list[0].temp.eve
                        break;
                    default:
                        myTemp = getData.list[0].temp.night
                }

                this.setState({temperature: Math.round(myTemp)})
                console.log(getData, getData.list[0].temp, myTemp);
            })
        } else {
            console.log("Geo location not supported")
        }
    }

     navLinks() {
        if (this.state.navData) {
            return this.state.navData.map((item) => {
                return (
                    <li className="nav-item">
                        <Link to={`/listing/${item.category}`} key={item.id} style={{textDecoration: 'none'}}>{item.category}</Link>
                        {/* <a className="nav-link active" aria-current="page" target="_blank" href="./pages/mens.html" id="a_tag">MEN</a> */}
                    </li>
                )
            })
        }
        
    }

    render() {
        const names = this.state.navData
        return (
            <nav className="navbar navbar-expand-lg bg-light" id="nav_bar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={myntraLogo} alt="logo" id="logo" height="50px" width="80px" style={{marginTop: 5}} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginTop: 5}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 my_links">
                            {/* <li className="nav-item">
                                <Link to="/" style={{textDecoration: 'none'}}>{this.state.navData[0]}</Link>
                                {/* <a className="nav-link active" aria-current="page" target="_blank" href="./pages/mens.html" id="a_tag">MEN</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="a_tag">WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="a_tag">KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="a_tag">HOME & LIVING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="a_tag">BEAUTY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="a_tag">STUDIO</a>
                            </li> */}
                            {this.navLinks()}
                        </ul>
                        <form role="search" className="my_input">
                            <i className="fa-solid fa-magnifying-glass" id="search_icon"></i>
                            <i className="fa-solid fa-moon moon" id="moon" onclick="toggleTheme()"></i>
                            <i className="fa-solid fa-sun sun" id="sun" onclick="toggleTheme()"></i>
                            <input className="form-control me-2" type="search" placeholder="Search for products, brands and more" aria-label="Search" style={{letterSpacing: 1}}></input>
                        </form>
                        <div className="d-flex my_icons">
                        <Link className="navbar-brand" to="/wishlist" style={{marginRight: 12, color: 'black'}}>
                            <i className="fa-regular fa-user" id="nav_icon" style={{fontSize: 20}}></i>
                        </Link>
                            
                        <Link className="navbar-brand" to="/wishlist" style={{marginRight: 12, color: 'black'}}>
                            <i className="fa-regular fa-heart" id="nav_icon" style={{fontSize: 20}}></i>
                        </Link>
                        <Link className="navbar-brand" to="/viewOrders" style={{marginRight: 12, color: 'black'}}>
                            <i className="fa-sharp fa-solid fa-bag-shopping" id="nav_icon" style={{position: 'relative', fontSize: 20}}>
                            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style={{top: '-3px', fontSize: 11}}>
                                {this.state.totalOrders}
                            </span>
                            </i>
                        </Link>
                            <Link className="navbar-brand" to="/" style={{marginRight: 12, color: 'black'}}>
                                <div data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on bottom" style={{marginTop: 2}}>
                                    <i className="fa-solid fa-cloud" id="nav_icon" style={{marginTop: 5, fontSize: 20}}></i>
                                    <p id="weather-info">{this.state.temperature}&#8451;</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;