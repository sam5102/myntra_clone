import React, { Component } from 'react'
import axios from 'axios'
import DisplayOrder from './DisplayOrder'

const orderApi = "https://myntra-clone.onrender.com/viewOrder"
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
                <DisplayOrder orderData={this.state.orders}/>
            </>
          )
    }
  
    componentDidMount() {
        axios.get(orderApi).then((res) => {
            console.log(res.data);
            this.setState({orders: res.data})
        })
    }
}

export default viewOrders