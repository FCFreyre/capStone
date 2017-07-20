import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link classNameName={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)


class Nav extends React.Component {
  render() {
    return (
      <div className="ui container nav">
        <div className="ui grid">
          <div className="computer tablet only row">
            <div id="navbar" className="ui inverted fixed menu navbar page grid">
              <a href="/">
                <img className="nav-logo" src="images/huddle-transparent.png"/>
              </a>
              <div className="right menu">
                <a href="" className="active item">Sign In</a>
                <a href="" className="active item">Contact</a>
              </div>
            </div>
          </div>
          <div className="mobile only row">
            <div className="ui fixed inverted navbar menu">
              <a href="/">
                <img className="nav-logo" src="images/huddle-transparent.png"/>
              </a>
              <div className="right menu open">
                <a href="" className="menu item">
                  <i className="content icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Nav;
