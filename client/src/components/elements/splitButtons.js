import React from 'react';
import { Button } from 'react-bootstrap';

const SplitButtons = (props) => {
  const { splits } = props;
  return (
    <div>
      { splits && splits.map(split => {
        return (
          <Button>{ split.name }</Button>
        )
      })}
    </div>
  );
}

export default SplitButtons;