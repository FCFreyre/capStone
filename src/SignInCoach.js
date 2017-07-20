import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';

import Coach from './Coach';
import PlaysPage from './PlaysPage';
import PlayFormPage from './PlayFormPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)


class SignInCoach extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container landing-page">
          <img className='logo center' src='images/huddle_logo.jpg' alt="logo"/>

            <div className="ui card centered" id="sign-in">
              <h1>Coach Log In</h1>
                <div>
                  <h4>Username: <input placeholder="Username"></input></h4>
                </div>
                <br></br>
                <div>
                  <h4>Password: <input class="input-underline" placeholder="Password"></input></h4>

                </div>
              <button>
                <ActiveLink activeOnlyWhenExact to="/Coach" label="Log In" />
              </button>

              <Route path="/Coach" component={Coach} />
            </div>

        </div>

      </div>
    );
  }
}

export default SignInCoach;
