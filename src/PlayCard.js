import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function PlayCard({ play, deletePlay }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={play.cover} alt="Play" />
      </div>
      <div className="content">
        <div className="header">{play.title}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">

          <Link to={`/Coach/play/${play._id}`} className="ui basic button green">Edit</Link>

        <div className="ui basic button red" onClick={() => deletePlay(play._id)}>Delete</div>
        </div>
      </div>
    </div>
  );
}


PlayCard.propTypes = {
  play: PropTypes.object.isRequired,
  deletePlay: PropTypes.func.isRequired
}
