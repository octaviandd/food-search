/** @format */

import React from "react";

export default class RecipesSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.checkInput = this.checkInput.bind(this);
    this.newSearch = this.newSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  checkInput(e) {
    var value = e.target.value;
    this.setState({
      input: value
    });
    console.log(this.state.input);
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      this.newSearch();
    }
  };

  newSearch() {
    let choice = this.state.input;
    console.log(choice);
    this.props.changeActive(choice);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div>
        <div className="recipes-searchbar">
          <div>
            <input
              onKeyDown={this.handleKeyDown}
              value={this.state.input}
              onChange={this.checkInput}
              type="search"
              placeholder="Search recipes..."
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
