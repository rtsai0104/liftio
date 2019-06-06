import React, {Component} from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';

class Append extends Component {
  state = {
    id: null,
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
    this.setState({
       ...this.state,
       id: Math.random()
    })
    this.props.append(this.state);
    console.log('Submitted');
  }

  render() {
    return (
      <div>
      <Form onSubmit={e => this.handleSubmit(e)}>
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
          <Button type="submit">Add</Button>
          </Form>

      </div>
    );
  }
}

export default Append;
