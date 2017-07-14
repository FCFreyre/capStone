import React from 'react';
import PlayCard from './PlayCard'

export default function PlaysList({ plays, deletePlay }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );

  const playsList = (
    <div className='ui four cards'>
      {

        plays.map(play => <PlayCard play={play} key={play._id} deletePlay={deletePlay} />) }
    </div>
  );
  return (
    <div>
      {plays.length === 0 ? emptyMessage : playsList}
    </div>
  );
}

PlaysList.propTypes = {
  plays: React.PropTypes.array.isRequired,
  deletePlay: React.PropTypes.func.isRequired
}
