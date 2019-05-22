import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const LiftButtons = (props) => {
  const { lifts } = props;
  return (
    <div>
      { lifts && lifts.map(lift => {
        return (
          <Button variant="primary" size="lg" block>{ lift.name }</Button>
        )
      })}
    </div>
  );
}

export default LiftButtons;
