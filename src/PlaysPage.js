import React from 'react';
import PlaysList from './PlaysList';
import { connect } from 'react-redux';
import { fetchPlays } from './actions'

class PlaysPage extends React.Component {
  componentDidMount() {
    this.props.fetchPlays();
  }
  render() {
    return (
      <div>
        <h1>Plays List</h1>

        <PlaysList plays={this.props.plays} />
      </div>
    );
  }
}

PlaysPage.propTypes = {
  plays: React.PropTypes.array.isRequired,
  fetchPlays: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    plays: state.plays
  }
}

export default connect(mapStateToProps, { fetchPlays })(PlaysPage);
