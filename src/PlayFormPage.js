import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePlay, fetchPlay, updatePlay } from './actions';
import PlayForm from './PlayForm'

class PlayFormPage extends React.Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { match } = this.props
    if(match.params._id) {
      this.props.fetchPlay(match.params._id)
    }
  }

  savePlay = ({_id, title, cover}) => {
    if(_id) {
      return this.props.updatePlay({ _id, title, cover }).then(
        () => { this.setState({ redirect: true })}
      )
    } else {
      return this.props.savePlay({ title, cover }).then(
        () => { this.setState({ redirect: true })}
      );
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/Coach/plays" /> :
          <PlayForm
            play={this.props.play}
            savePlay={this.savePlay}
          />
        }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if(match.params._id) {
    return {
      play: state.plays.find(item => item._id === match.params._id)
    }
  }

  return { play: null }
}


export default connect(mapStateToProps, { savePlay, fetchPlay, updatePlay })(PlayFormPage);
