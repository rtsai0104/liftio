import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'
import Append from '../elements/append';

class LiftData extends Component {

  state = {
    data: [
      {id: 1, weight: 175, reps: 8},
      {id: 2, weight: 175, reps: 8},
      {id: 3, weight: 175, reps: 8},
    ]
  }

  append = (set) => {
      data.id = Math.random();
      let data = [...this.state.data, set];
      this.setState({
        data: data
      })
  }


}

export default LiftData;
