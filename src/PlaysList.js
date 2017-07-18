import React from 'react';
import PlayCard from './PlayCard'
import PropTypes from 'prop-types';

export default function PlaysList({ plays, deletePlay }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );
  const playsList = (
    <div className='ui four cards'>
      {plays.map((play, i) => <PlayCard play={play} key={i} deletePlay={deletePlay} />) }
    </div>
  );
  return (
    <div>
      {plays.length === 0 ? emptyMessage : playsList}
    </div>
  );
}

PlaysList.propTypes = {
  plays: PropTypes.array.isRequired,
  deletePlay: PropTypes.func.isRequired
}
