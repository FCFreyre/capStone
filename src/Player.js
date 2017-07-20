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
          <h2>Player123</h2>
        </div>

          <div className="ui two item menu" id="player-prof">
            <ActiveLink activeOnlyWhenExact to="/Player/plays" label="Playbook" />
            <ActiveLink activeOnlyWhenExact to="/Player/plays/FlashCardPage" label="Test your skills" />
          </div>
      </div>

    );
  }
}

export default Player;
