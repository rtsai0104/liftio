import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }


  render() {

    return (
      <div>
        <NavLink to="/login"><Button variant="primary">Sign In</Button></NavLink>
        <div>
          <Button variant="primary">Sign Up</Button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Button variant="outline-primary">Submit</Button>
            <div className="red-text center">
              {/* { authError ? <p>{ authError }</p> : null } */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  };
};

export default connect(null, mapDispatchToProps)(SignUp);