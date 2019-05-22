import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import LiftButtons from '../elements/liftButtons';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'

class Lifts extends Component {

  state = {
    lifts: [
      {name: 'Bench Press'},
      {name: 'Chest Flys'},
      {name: 'Cable Flys'},
      {name: 'Pushups'},
      {name: 'Skullcrushers'},
      {name: 'Dips'},
    ]
  }



  render() {

    const { lifts } = this.state;
    return (
      <div>

        <div className="custom-banner">
          <NavLink to="/splits">
            <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
          </NavLink>
        </div>
        <h1>Lifts</h1>

        <div className="button-container">
        <LiftButtons lifts={lifts} />
        </div>
        <div className="text-center">
        <span className="oi oi-plus add white" title="add" aria-hidden="true" ></span>
        </div>

      </div>
    );
  }
}

export default Lifts;
