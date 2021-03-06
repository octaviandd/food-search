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
    let food = this.state.input;
    this.props.changeActive(food);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div className="branded-search-container">
        <input
          type="text"
          onChange={this.checkInput}
          value={this.state.input}
          placeholder="Search products.."
        ></input>
        <button className="search-button" onClick={this.newSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}
