import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePlay, fetchPlay, updatePlay } from './actions';

class PlayFormPage extends React.Component {

  componentDidMount = () => {
    const { match } = this.props
    if(match.params._id) {
      this.props.fetchPlay(match.params._id)
    }
  }

  savePlay = ({ _id, title, cover}) => {
    if(_id) {
      return this.props.updatePlay({ _id, title, cover }).then(
        () => { this.setState({ redirect: true })}
    } else {
      return this.props.savePlay({ title, cover }).then(
        () => { this.setState({ redirect: true })}
      );
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default PlayFormPage;
