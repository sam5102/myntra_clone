import React, { Component } from 'react';
import './Header.css';
import myntraLogo from '../images/myntra-logo.png'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { Badge, notification } from 'antd';

const categoryUrl = "https://myntra-clone.onrender.com/categories"
const url = "http://3.17.216.66:5000/api/auth/userinfo"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            navData: [],
            totalOrders: 0,
            userData: '',
            products: [],
            searchText: ''
        }
    }

    async componentDidMount() {
        fetch(`${categoryUrl}`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({navData: data})
        })
        this.getUserInfo()
        this.totalOrders()
        this.checkLocation()
        this.fetchProductName()
    }

    getUserInfo = () => {
        fetch(url, {
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('access_token'),
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            sessionStorage.setItem("user_info", JSON.stringify(data))
            this.setState({userData: data})
        })
    }

    handleLogout = () => {
        sessionStorage.removeItem('access_token');
        this.setState({userData:''})
        notification.open({
            message: 'Successfully Logout',
            placement: "bottomLeft"
          });
        this.props.history.push('/')
    }

    totalOrders = () => {
        axios.get("https://myntra-clone.onrender.com/viewOrder").then((res) => {
            this.setState({totalOrders: res.data.length})
        })
    }

    fetchProductName = () => {
        axios.get("https://myntra-clone.onrender.com/products").then((res) => {
            res.data.forEach(element => {
                const data = {brand: element.brand, name: element.product_name}
                this.state.products.push(data)
            });
            console.log(res.data);
        })
    }

    goToWishlist = () => {
        if (this.state.userData.name) {
            this.props.history.push('/wishlist/' + this.state.userData.email)
        } else {
            alert("Please login to check wishlist")
        }
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            console.log();
            let data = this.state.userData;
            sessionStorage.setItem("user_info", JSON.stringify(data))
            return (
                <>
                    <i className="fa-solid fa-right-from-bracket" id="nav_icon" style={{fontSize: 20, marginTop: 10}} 
                    onClick={this.handleLogout}></i>
                    
                </>
               
            )
        } else {
            return (
                <Link className="navbar-brand" to="/login" style={{marginRight: 12, color: 'black'}}>
                    <i className="fa-regular fa-user" id="nav_icon" style={{fontSize: 20}}></i>
                </Link>
            )
        }
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
                    </li>
                )
            })
        }
    }


    handleChange = (event) => {
        let append = event.target.value
        this.setState({searchText: event.target.value})
        this.renderSuggestions(this.state.products, event.target.value)
        console.log(event.target.value);
    }

    renderSuggestions = (data, query) => {
        if (data.length > 0) {
            if (query) {
                console.log(query);
                 data.filter(entry => entry.name.includes(query)).map((item) => {
                    console.log(item);
                    return (
                        <span style={{display: 'block'}}>
                            {item.name}
                        </span>
                    )
                })
                
            } else {
                return data.map((item) => {
                    return (
                        <span style={{display: 'block'}}>
                            {item.name}
                        </span>
                    )
                })
            }
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
                            
                            {this.navLinks()}
                        </ul>
                        <form role="search" className="my_input">
                            <i className="fa-solid fa-magnifying-glass" id="search_icon"></i>
                            <i className="fa-solid fa-moon moon" id="moon" onclick="toggleTheme()"></i>
                            <i className="fa-solid fa-sun sun" id="sun" onclick="toggleTheme()"></i>
                            <input className="form-control me-2" type="search" value={this.state.searchText} placeholder="Search for products, brands and more" onChange={this.handleChange} aria-label="Search" style={{letterSpacing: 1}}></input>
                            {/* <div>
                                {this.renderSuggestions(this.state.products)}
                            </div> */}
                            
                        </form>
                        <div className="d-flex my_icons">
                        {this.conditionalHeader()}
                            
                        <i className="fa-regular fa-heart" id="nav_icon" style={{fontSize: 20, marginTop:10}} 
                        onClick={this.goToWishlist}></i>
                        
                        <Link className="navbar-brand" to="/viewOrders" style={{marginRight: 12, color: 'black'}}>
                        <Badge count={this.state.totalOrders}>
                            <i className="fa-sharp fa-solid fa-bag-shopping" id="nav_icon" style={{position: 'relative', fontSize: 20}}>
                            </i>
                        </Badge>
                            
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

export default withRouter(Header);

//http://localhost:9500/categories