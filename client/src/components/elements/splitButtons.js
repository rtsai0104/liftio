import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SplitButtons = (props) => {
  const { splits } = props;
  return (
    <div>
      { splits && splits.map(split => {
        return (
          <NavLink to="/lifts" key={split.name}>
            <Button variant="primary" size="lg" block>{ split.name }</Button>
          </NavLink>
        )
      })}
    </div>
  );
}

export default SplitButtons;
