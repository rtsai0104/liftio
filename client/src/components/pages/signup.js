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
    console.log(this.state);
    this.props.signUp(this.state);
  }


  render() {

    return (
      <div>
        <div>
          <NavLink to="/login"><Button variant="primary">Sign In</Button></NavLink>
        </div>
        <div>
          <NavLink to="/signup"><Button variant="primary">Sign Up</Button></NavLink>
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
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              id="firstName"
              onChange={this.handleChange}
              type="text"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              id="lastName"
              onChange={this.handleChange}
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <div className="input-field">
            <Button variant="outline-primary" type="Submit">Submit</Button>
            <div className="red-text center">
              {/* { authError ? <p>{ authError }</p> : null } */}
            </div>
          </div>
        </Form>
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