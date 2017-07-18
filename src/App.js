import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Redirect
} from 'react-router-dom';



class App extends Component {


  render() {
    return (
      <div>
        <Redirect to='./Landing' />
      </div>

    );
  }
}

export default App;
