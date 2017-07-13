import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';
import PlayFormPage from './PlayFormPage';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/plays">Plays</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/plays/new">Add New Play</Link>
        </div>

        <Route exact path="/plays" component={PlaysPage} />
        <Route path="/plays/new" component={PlayFormPage} />
        <Route path="/play/:_id" component={PlayFormPage} />
      </div>
    );
  }
}

export default App;
