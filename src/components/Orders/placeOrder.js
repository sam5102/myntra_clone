import React, { Component } from 'react'
import './placeOrder.css'

const placingOrder = "https://myntra-clone.onrender.com/placeOrder"
//http://localhost:9500/placeOrder

const url = "https://myntra-clone.onrender.com/product_detail/"
//http://localhost:9500/product_detail/

export default class placeOrder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: Math.floor(Math.random() *10000),
      product: this.props.match.params.orderName,
      name: "Himanshu",
      email: 'himanshu@gmail.com',
      cost: 0,
      phone: 123456789,
      address: "mera address",
      order: ""
    }
  }

  componentDidMount() {
    let product = JSON.parse(sessionStorage.getItem('productName'))
    console.log(product);
    fetch(`${url}${product}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].price);
      this.setState({order: data, cost: parseInt(data[0].price)})
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  checkout=() => {
    let obj = this.state
    obj.order = sessionStorage.getItem("productName")
    fetch(placingOrder, {
      method: 'POST', 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(this.props.history.push('/viewOrders'))
  }

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
            <div className="card mb-3" style={{maxWidth: 600, height: 180}} key={item.item_code}>
            <div className="row g-0" style={{height: '100%'}}>
              <div className="col-md-4" style={{height: '100%'}}>
                <img src={item.thumbnail} style={{width: 165, height: '100%'}} className="img-fluid rounded-start" alt={item.product_name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{item.brand}</h4>
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">Size: {item.size}</p>
                  <p className="card-text">Price: {item.price}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }) 
    }
  }

  render() {
    return (
      <>
        <div className="container" style={{marginTop: 110}}>
          <div className='panel panel-primary'>
            
            <div className="panel-heading">
              <h4>Order for {this.state.product}</h4>
            </div>
            {this.renderItem(this.state.order)}

            <div className="panel-body">
              <input type="hidden" name="cost" value={this.state.cost} />
              <input type="hidden" name="id" value={this.state.id} />
              <input type="hidden" name="product" value={this.state.product} />

              <div className="row">
                <div className="form-group col-md-6">
                  <label for="fname" className='control-label'>FirstName</label>
                  <input type="text" className="form-control" id='fname' name='name' value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="email" className='control-label'>Email</label>
                  <input type="text" className="form-control" id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="phone" className='control-label'>Phone</label>
                  <input type="number" className="form-control" id='phone' name='phone' value={this.state.phone} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="address" className='control-label'>Address</label>
                  <input type="text" className="form-control" id='address' name='address' value={this.state.address} onChange={this.handleChange}/>
                </div>
              </div>
              
              <div className="row" style={{ marginTop: 15 }}>
                <div className="col-md-12">
                  <h2>Total Price is Rs. {this.state.cost}</h2>
                </div>
              </div>
              <button className="btn btn-primary" onClick={this.checkout} type="submit">PlaceOrder</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
