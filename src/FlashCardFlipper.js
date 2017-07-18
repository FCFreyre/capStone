import React from 'react';
import FlashCard from './FlashCard'
import PropTypes from 'prop-types';

export default function FlashCardFlipper({ plays }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );
  const randomPlay = (
    <div className='ui card'>
      {plays.map((play, i) => <FlashCard play={play} key={i} />) }
    </div>
  );
  return (
    <div>
      {plays.length === 0 ? emptyMessage : playsList}
    </div>
  );
}

FlashCardFlipper.propTypes = {
  plays: PropTypes.array.isRequired
}
