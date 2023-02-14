import React, { Component } from 'react'
import './placeOrder.css'

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

  handleChange = () => {

  }

  render() {
    return (
      <>
        <div className="container" style={{marginTop: 110}}>
          <div className='panel panel-primary'>
            
            <div className="panel-heading">
              <h3>Order for {this.state.product}</h3>
            </div>

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
              <button className="btn btn-primary">PlaceOrder</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
