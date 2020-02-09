/** @format */

import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.checkInput = this.checkInput.bind(this);
    this.newSearch = this.newSearch.bind(this);
  }

  checkInput(e) {
    var value = e.target.value;
    this.setState({
      input: value
    });
  }

  newSearch() {
    let movie = this.state.input;
    this.props.changeActive(movie);
    this.setState({
      input: ""
    });
  }
  render() {
    return (
      <div>
        <input onChange={this.checkInput} value={this.state.input}></input>
        <button onClick={e => this.newSearch(e)}>Submit</button>
      </div>
    );
  }
}
