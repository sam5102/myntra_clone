import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/login"

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: 'himanshu@gmail.com',
      password: '123456678',
      message: ""
    }
  }


  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit=() => {
    fetch(url, {
      method: 'POST', 
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.auth === false) {
            this.setState({message: data.token})
        } else {
            sessionStorage.setItem('access_token', data.token)
            this.props.history.push('/')
        }
    })
  }


  render() {
    return (
      <>
        <Header />
        <div className="container" style={{marginTop: 110}}>
          <div className='panel panel-primary'>
            
            <div className="panel-heading">
              <h4>Login</h4>
              {this.state.message}
            </div>

            <div className="panel-body">

              <div className="row">
                <div className="form-group col-md-6">
                  <label for="email" className='control-label'>Email</label>
                  <input type="text" className="form-control" id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                </div>
                
                <div className="form-group col-md-6">
                  <label for="password" className='control-label'>Password</label>
                  <input type="password" className="form-control" id='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                </div>
              </div>
              
              <div style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                <button className="btn btn-primary" onClick={this.handleSubmit} type="submit" 
                style={{marginRight: 20}}>Login</button>
                <Link className="navbar-brand" to="/register" style={{marginRight: 12, color: 'black'}}>
                  <button className="btn btn-success">Register</button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}
