import React from 'react';
import PropTypes from 'prop-types';

export default function FlashCard({ play }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={play.cover} alt="Play" />
      </div>
      <div className="content">
        <div className="header">{play.title}</div>
      </div>
    </div>
  );
}


FlashCard.propTypes = {
  play: PropTypes.object.isRequired
}
