import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Redirect
} from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';


class App extends Component {


  render() {
    return (
      <div id="appWrapper">
        <Nav />

        <Route exact path="/" component={Landing} />
      </div>

    );
  }
}

export default App;
