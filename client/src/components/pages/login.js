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
        <div>
          <Button variant="primary">Sign In</Button>
        </div>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              id="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              id="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <div className="input-field">
            <Button variant="outline-primary" type="Submit">Login</Button>
            <div className="red-text center">
              {/* { authError ? <p>{ authError }</p> : null } */}
            </div>
          </div>
        </Form>
        <div>
          <NavLink to="/signup"><Button variant="primary">Sign Up</Button></NavLink>
        </div>
        
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