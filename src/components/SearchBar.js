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
      <div className="branded-search-container">
        <input
          onChange={this.checkInput}
          value={this.state.input}
          placeholder="Search products.."
        ></input>
        <button onClick={this.newSearch}>Submit</button>
      </div>
    );
  }
}
