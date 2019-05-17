import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <NavLink to="/login">Log In</NavLink>
      <br/>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
}

export default Main;