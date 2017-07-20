import React from 'react';
import FlashCardList from './FlashCardList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlays } from './actions';
import FlashCard from './FlashCard';



class FlashCardFlipper extends React.Component {

  state={
    isLoading: "pending"
  }

   componentWillMount() {
      this.props.fetchPlays()
 }

  handleClick = () => {
    const i = Math.floor(Math.random() * this.props.plays.length)
    this.setState({play: this.props.plays[i]})
  }

  render() {
    console.log(this.props.plays);
    if(this.props.plays === true || this.props.plays ==="pending" || this.props.plays.length === 0){
      return(<div className="ui container header center">This is a loading screen</div>)
    }else {
      console.log(this.props.plays);

    return (
      <div className="playbook">
        <h1 className="plays-list-label">Flash Cards</h1>
          <div className="play-buttons">
            <button className="fc-button">Flip Card</button>
            <button className="fc-button">Next Play</button>
          </div>
          <div className="ui card play-image">
            <img className="fc-card" src={this.props.plays[0].cover} alt="play-cover"/>
          </div>
      </div>
    );
  }

}
}

FlashCardFlipper.propTypes = {
  plays: PropTypes.array.isRequired,
  fetchPlays: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    plays: state.plays
  }
}

export default connect(mapStateToProps, { fetchPlays })(FlashCardFlipper);
