import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'
import Append from '../elements/append';
import Lifts from '../elements/liftList';

class LiftData extends Component {

  state = {
    sets: [

    ]
  }

  append = (set) => {
      let sets = [...this.state.sets, set];
      console.log(sets);
      this.setState({
        sets: sets
      });
  }

  render() {
    return (
      <div>
        <div className="custom-banner">
          <NavLink to="/lifts">
            <span className="oi oi-caret-left white" title="caret left" aria-hidden="true"></span>
          </NavLink>
        </div>
        <h2>Add Sets</h2>
        <Append append = {this.append}/>
        <Lifts sets = {this.state.sets}/>
      </div>
    )
  }


}

export default LiftData;
