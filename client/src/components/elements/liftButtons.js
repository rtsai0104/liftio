import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LiftButtons = (props) => {
  const { lifts } = props;
  return (
    <div>
      { lifts && lifts.map(lift => {
        return (
          <NavLink to="/liftdata" key={lift.name}>
            <Button variant="primary" size="lg" block>{ lift.name }</Button>
          </NavLink>
        )
      })}
    </div>
  );
}

export default LiftButtons;
