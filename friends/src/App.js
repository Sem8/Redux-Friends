import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Friends List</h1>
          <ul>
           <Link to='/public'> <li>Public Page</li> </Link> 
           <Link to='/protected'> <li>Private Page</li> </Link> 
          </ul>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
