import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import SplitButtons from '../elements/splitButtons';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'

class Profile extends Component {

  state = {
    name: 'John Doe',
    lastworkout: '5/16/2019',
    splits: [{name: 'Chest'}, {name: 'Arms'}]
  }

  render() {
    const { name, lastworkout, splits } = this.state;
    return (
      <div>

        <div className="custom-banner">
          <NavLink to="/login">
            <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
          </NavLink>
        </div>

        <div className="custom-profile">
          <div className="custom-icon"></div>
          <h5>{name}</h5>
        </div>

        <div className="button-container">
          <h6>Last Workout: {lastworkout}</h6>
          <NavLink to="/splits"><Button variant="danger" size="lg" block>Start Workout</Button></NavLink>
          <NavLink to=""><Button variant="primary" size="lg" block>View Data</Button></NavLink>
        </div>

        <SplitButtons splits={splits} />

      </div>
    );
  }
}

export default Profile;
