import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/pages/login';
import Main from './components/pages/main';
import SignUp from './components/pages/signup';
import Profile from './components/pages/profile';
import Splits from './components/pages/splits';
import Lifts from './components/pages/lifts';
import LiftData from './components/pages/liftdata';
import Append from './components/elements/append';
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
              <Route path='/splits' component={Splits} />
              <Route path='/lifts' component={Lifts} />
              <Route path='/liftdata' component={LiftData} />
              <Route path='/append' component={Append} />
            </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

export default App
