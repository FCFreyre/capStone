import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class Coach extends React.Component {

  render() {
    return (
      <div className="ui">

        <div className="ui card">
          <h3>Welcome</h3>
          <h2>Coach123</h2>
        </div>

        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/Coach" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/Coach/plays" label="Plays" />
          <ActiveLink activeOnlyWhenExact to="/Coach/plays/new" label="Add New Play" />
        </div>

        <Route exact path="/plays" component={PlaysPage} />
      </div>
    );
  }
}

export default Coach;
