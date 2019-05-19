import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submit email: ${this.state.email} pw: ${this.state.password}`);
    this.props.logIn(this.state);
  }

  render() {
    const { authError, token } = this.props;
    if (token) return <Redirect to='/' />

    return (
      <div>
        <Button variant="primary">Sign In</Button>
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
            <Button variant="outline-primary">Login</Button>
            <div className="red-text center">
              {/* { authError ? <p>{ authError }</p> : null } */}
            </div>
          </div>
        </form>
        <NavLink to="/signup"><Button variant="primary">Sign Up</Button></NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    token: state.auth.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);