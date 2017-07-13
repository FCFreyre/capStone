import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayCard({ play }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={play.cover} alt="Play Picture" />
      </div>
      <div className="content">
        <div className="header">{play.title}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link to={`/play/${play._id}`} className="ui basic button green">Edit</Link>
          <div className="ui basic button red">Delete</div>
        </div>
      </div>
    </div>
  );
}


PlayCard.propTypes = {
  play: React.PropTypes.object.isRequired
}
