import React, { Component } from 'react'

const url = "http://3.17.216.66:5000/api/auth/login"

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Himanshu",
      email: 'himanshu@gmail.com',
      password: '123456678',
      phone: 123456789,
    }
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  checkout=() => {
    fetch(url, {
      method: 'POST', 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(this.props.history.push('/'))
  }



  render() {
    return (
      <>
        <div className="container" style={{marginTop: 110}}>
          <div className='panel panel-primary'>
            
            <div className="panel-heading">
              <h4>Register</h4>
            </div>

            <div className="panel-body">

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
                  <label for="password" className='control-label'>Password</label>
                  <input type="password" className="form-control" id='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                </div>
              </div>
              
              
              <button className="btn btn-primary" onClick={this.checkout} type="submit">Register</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
