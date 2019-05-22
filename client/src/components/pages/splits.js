import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'

class Splits extends Component {

  state = {
    splits: ['Chest', 'Legs', 'Cardio']
  }



  render() {

    const { splits } = this.state;
    return (
      <div>

        <div className="custom-banner">
          <NavLink to="/profile">
            <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
          </NavLink>
        </div>
        <h1>Splits</h1>

        <div className="button-container">
        </div>

      </div>
    );
  }
}

export default Splits;
