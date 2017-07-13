import React from 'react';

export default function PlayCard({ play }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={play.cover} alt="Play Picture" />
      </div>
      <div className="content">
        <div className="header">{play.title}</div>
      </div>
    </div>
  );
}


PlayCard.propTypes = {
  play: React.PropTypes.object.isRequired
}
