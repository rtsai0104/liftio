import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Main = () => {
  return (
    <div>
      <NavLink to="/login"><Button variant="outline-primary">Log In</Button></NavLink>
      <br/>
      <NavLink to="/signup"><Button variant="outline-primary">Sign Up</Button></NavLink>
    </div>
  );
}

export default Main;