import React from 'react';

class PlayForm extends React.Component {
  state = {
    title: '',
    cover: '',
    errors; {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //validation
    let errors = {};
    if(this.state.title === '') errors.title = "Can't be empty";
    if(this.state.cover === '') errors.cover = "Can't be empty";
    this.setState({ errors });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Add new play</h1>

        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
        </div>

        <div className="field">
          <label htmlFor="cover">Cover URL</label>
          <input
          name="cover"
          value={this.state.cover}
          onChange={this.handleChange}
            id="cover"
          />
        </div>

        <div className="field">
          {this.state.cover !== '' &&<img src={this.state.cover} alt="cover" className="ui small bordered image"/>}
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
  }
}

export default PlayForm;
