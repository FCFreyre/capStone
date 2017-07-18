import React from 'react';
import FlashCard from './FlashCard'
import PropTypes from 'prop-types';

export default function FlashCardList({ plays }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );
  const playsList = (
    <div className='ui four column doubling stack grid container'>
      {plays.map((play, i) => <FlashCard play={play} key={i} />) }
    </div>
  );
  return (
    <div>
      {plays.length === 0 ? emptyMessage : playsList}
    </div>
  );
}

FlashCardList.propTypes = {
  plays: PropTypes.array.isRequired
}
