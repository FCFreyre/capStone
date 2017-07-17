import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';
import PlayFormPage from './PlayFormPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/plays" label="Plays" />
          <ActiveLink activeOnlyWhenExact to="/plays/new" label="Add New Play" />
        </div>

        <Route exact path="/plays" component={PlaysPage} />
        <Route path="/plays/new" component={PlayFormPage} />
        <Route path="/play/:_id" component={PlayFormPage} />
      </div>
    );
  }
}

export default App;
