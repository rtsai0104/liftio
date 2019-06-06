import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {Button, Form, Image} from 'react-bootstrap';
import '../../assets/open-iconic-master/font/css/open-iconic-bootstrap.css'

const Lifts = ({sets}) => {
  const liftList = sets.map(set => {
    return (
      <div key={set.id}>
        <div>Weight : {set.weight}</div>
        <div>Reps: {set.reps}</div>
        {/* <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button> */}
      </div>
    )});

  return (
    <div className="lifts-name">
      {liftList}
    </div>);
}

export default Lifts
