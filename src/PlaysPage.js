import React from 'react';
import PlaysList from './PlaysList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlays, deletePlay } from './actions'

class PlaysPage extends React.Component {
  state={
    isLoading: true
  }

   async componentWillMount() {
    //  this.setState({isLoading: true})
     await this.props.fetchPlays()
     this.setState({isLoading: false})
     true
  }
  componentDidMount(){
    this.props.deletePlay
  }

  render() {
    return (
      <div className="ui container">
        <h1 className="plays-list-label">Playbook</h1>

        {!this.state.isLoading ? <PlaysList plays={this.props.plays} deletePlay={this.props.deletePlay} />: null}
      </div>
    );
  }
}

PlaysPage.propTypes = {
  plays: PropTypes.array.isRequired,
  fetchPlays: PropTypes.func.isRequired,
  deletePlay: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    plays: state.plays
  }
}

export default connect(mapStateToProps, { fetchPlays, deletePlay })(PlaysPage);
