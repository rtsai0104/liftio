import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Customers from './components/Customer/customers';
import Login from './components/pages/login';
import Main from './components/pages/main';
import SignUp from './components/pages/signup';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  render () {
    return (
      <BrowserRouter>
      <div class="container">
        <div className="App">
            <ul>
              <li><NavLink to="/login"><button className="btn btn-default">Log In</button></NavLink></li>
              <li>
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/login' component={Login} />
                </Switch>
                </li>
              <li><NavLink to="/signup"><button className="btn btn-default">Sign Up</button></NavLink></li>
              <li>
                <Switch>
                  <Route exact path='/' component={Main} />
                  <Route path='/signup' component={SignUp} />
                </Switch>
              </li>
            </ul>
            <div class="switch">
          </div>
        </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
