import React, { Component } from "react";

class CreateFeedback extends Component {
  state = {
    title: "",
    body: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSumbmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumbmit} className="white">
          <h5 className="grey-text text-darken-3">Leave Feedback</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateFeedback;
