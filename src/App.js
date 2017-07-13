import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';
import PlayForm from './PlayForm';


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
        <Route path="/plays/new" component={PlayForm} />
        <Route path="/play/:_id" component={PlayForm} />
      </div>
    );
  }
}

export default App;
