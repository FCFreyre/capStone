import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import PlaysPage from './PlaysPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={
    ({ match }) => (
      <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class Coach extends React.Component {

  render() {
    return (
      <div>

        <div className="ui card" id="coach-username">
          <h2>Coach123</h2>
        </div>

        <div className="ui five item menu" id="coach-prof">
          <ActiveLink activeOnlyWhenExact to="/Coach/plays" label="Playbook" />
          <ActiveLink activeOnlyWhenExact to="/Coach/plays/new" label="Add New Play" />
          <ActiveLink activeOnlyWhenExact to="/" label="Roster" />
          <ActiveLink activeOnlyWhenExact to="/" label="Schedule" />
          <ActiveLink activeOnlyWhenExact to="/" label="Notes" />
        </div>

        <Route exact path="/plays" component={PlaysPage} />
      </div>
    );
  }
}

export default Coach;
