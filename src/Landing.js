import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import Player from './Player';
import Coach from './Coach';
import PlaysPage from './PlaysPage';
import PlayFormPage from './PlayFormPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)


class Landing extends React.Component {
  render() {
    return (
      <div className="ui container landing-page">
        <img className='logo center' src='images/huddle_logo.jpg' alt="logo"/>
        <div className="ui card centered sign-in">
          <ActiveLink activeOnlyWhenExact to="/Player" label="Log in as Player" />
          <ActiveLink activeOnlyWhenExact to="/Coach" label="Log in as Coach" />
          <ActiveLink activeOnlyWhenExact to="#" label="Sign up" />
        </div>


        <Route path="/Player" component={Player} />
        <Route path="/Coach" component={Coach} />
      </div>
    );
  }
}

export default Landing;
