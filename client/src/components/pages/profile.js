import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button, Form, Image } from 'react-bootstrap';

class Profile extends Component {

  state = {
    name: 'John Doe',
  }

render(){
  const {name} = this.state.name;
  return(
    <div>
    <div className="custom-banner"></div>
    <div className="custom-profile">
      <div className="custom-icon"></div>
      <h5>{this.state.name}</h5>
    </div>

    </div>
  );
  }
}

export default Profile;
