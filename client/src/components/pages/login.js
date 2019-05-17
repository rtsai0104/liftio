import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit email: ${this.state.email} pw: ${this.state.password}`);
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {/* { authError ? <p>{ authError }</p> : null } */}
            </div>
          </div>
        </form>
        <NavLink to="/">Back</NavLink>
      </div>
    );
  }
}

export default Login;