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
            <div className="ui inverted fixed menu navbar page grid">
              <img className="nav-logo" src="images/huddle_logo.jpg"/>
              <div className="right menu">
                <a href="" className="active item">Sign In</a>
                <a href="" className="active item">Contact</a>
              </div>
            </div>
          </div>
          <div className="mobile only row">
              <div className="ui fixed inverted navbar menu">
                  <a href="" className="brand item">Project Name</a>
                  <div className="right menu open">
                      <a href="" className="menu item">
                          <i className="content icon"></i>
                      </a>
                  </div>
              </div>
              <div className="ui vertical navbar menu">
                  <a href="" className="active item">Home</a>
                  <a href="" className="item">About</a>
                  <a href="" className="item">Contact</a>
                  <div className="ui item">
                      <div className="text">Dropdown</div>
                      <div className="menu">
                          <a className="item">Action</a>
                          <a className="item">Another action</a>
                          <a className="item">Something else here</a>
                          <a className="ui aider"></a>
                          <a className="item">Seperated link</a>
                          <a className="item">One more seperated link</a>
                        </div>
                  </div>
                  <div className="menu">
                      <a href="" className="active item">Default</a>
                      <a href="" className="item">Static top</a>
                      <a href="" className="item">Fixed top</a>
                  </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Nav;
