import React, { Component } from 'react'
import axios from 'axios'
import DisplayOrder from './DisplayOrder'
import Header from '../Header'
import loader from '../../images/giphy.gif'

const orderApi = "https://myntra-clone.onrender.com/viewOrder/"
//http://localhost:9500/viewOrder

class viewOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: ""
        }
    }
    render() {
        return (
            <>
                <Header />
                {this.state.orders ?
                <DisplayOrder orderData={this.state.orders}/>
                :
                <img src={loader} alt="loading..." style={{height: 220, marginTop: 150, marginLeft: '42%'}}/>
            }
            </>
          )
    }
  
    componentDidMount() {
        let mailId = this.props.match.params.emailId
        axios.get(`${orderApi}${mailId}`).then((res) => {
            console.log(res.data);
            this.setState({orders: res.data})
        })
    }
}

export default viewOrders