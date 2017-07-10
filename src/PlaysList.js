import React from 'react';

export default function PlaysList({ plays }) {
  const emptyMessage = (
    <p>There are no plays in your playbook yet.</p>
  );

  const playsList = (
    <p>list of plays</p>
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
