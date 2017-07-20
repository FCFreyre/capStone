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
import SignInPlayer from './SignInPlayer';
import SignInCoach from './SignInCoach';

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

        <div className="ui card centered" id="sign-in">
          <h1 className="welcome-message">Welcome to Huddle!</h1>
          <h4>I am logging in as a...</h4>
          <div className="ui two item menu">
            <ActiveLink activeOnlyWhenExact to="/SignInPlayer" label="Player" />
            <ActiveLink activeOnlyWhenExact to="/SignInCoach" label="Coach" />
          </div>

          <ActiveLink activeOnlyWhenExact to="#" label="New to Huddle? Sign up here!" />
        </div>


        <Route path="/SignInPlayer" component={SignInPlayer} />
        <Route path="/SignInCoach" component={SignInCoach} />
      </div>
    );
  }
}

export default Landing;
