import React, {Component} from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';

class Append extends Component {
  state = {
    weight: null,
    reps: null,
  }

handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault();
  this.props.append(this.state);
}
render() {

  const { data } = this.state;
  return (
    <div>

      <div className="custom-banner">
        <NavLink to="/lifts">
          <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
        </NavLink>
      </div>
      <h2>Add Sets</h2>

      <Form.Group>
          <Form.Control
            required
            id="weight"
            onChange={this.handleChange}
            type="int"
            placeholder="Enter Weight"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            id="reps"
            onChange={this.handleChange}
            type="int"
            placeholder="Reps"
          />
        </Form.Group>
      <div className="text-center">
      <span className="oi oi-plus add white" title="add" aria-hidden="true" ></span>
      </div>
    </div>
  );
}
}

export default Append
