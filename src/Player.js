import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';
import FlashCardList from './FlashCardList';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class Player extends React.Component {

  render() {
    return (

      <div>
        <div className="ui card">
          <h3>Welcome to</h3>
          <img src={'./images/huddle_logo.jpg'} alt="logo" width="100" />
          <h2>Player123</h2>
        </div>
        <div>

          <div className="ui three item menu">
            <ActiveLink activeOnlyWhenExact to="/Player" label="Home" />
            <ActiveLink activeOnlyWhenExact to="/Player/plays" label="Plays" />
            <ActiveLink activeOnlyWhenExact to="/Player/plays/FlashCardPage" label="Test your skills" />
          </div>
        </div>
      </div>

    );
  }
}

export default Player;
