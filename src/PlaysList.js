import React from 'react';
import PlayCard from './PlayCard'

export default function PlaysList({ plays }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );

  const playsList = (
    <div className='ui four cards'>
      {

        plays.map(play => <PlayCard play={play} key={play._id} />) }
    </div>
  );
  return (
    <div>
      {plays.length === 0 ? emptyMessage : playsList}
    </div>
  );
}

PlaysList.propTypes = {
  plays: React.PropTypes.array.isRequired
}
