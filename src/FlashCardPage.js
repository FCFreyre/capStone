import React from 'react';
import FlashCardList from './FlashCardList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlays, deletePlay } from './actions'

class FlashCardPage extends React.Component {
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
      <div className="playbook">
        <h1 className="plays-list-label">Playbook</h1>
        <br></br>
        {!this.state.isLoading ? <FlashCardList plays={this.props.plays} />: null}
      </div>
    );
  }
}

FlashCardPage.propTypes = {
  plays: PropTypes.array.isRequired,
  fetchPlays: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    plays: state.plays
  }
}

export default connect(mapStateToProps, { fetchPlays, deletePlay })(FlashCardPage);
