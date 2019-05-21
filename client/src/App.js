import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Container, Form, FormGroup } from 'react-bootstrap';
import Login from './components/pages/login';
import Main from './components/pages/main';
import SignUp from './components/pages/signup';
import Profile from './components/pages/profile';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        {/* <div className="App">
          <header>
            <ul>
              <li><NavLink to="/login">Log In</NavLink></li>
              <li><NavLink to="/">Main</NavLink></li>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
          </header> */}
          <div className = "custom-center">
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/profile' component={Profile} />
            </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

export default App
