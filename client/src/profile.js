import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Button, Form } from 'react-bootstrap';

class Login extends Component {
