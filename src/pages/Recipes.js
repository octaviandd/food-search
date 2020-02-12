/** @format */

import React from "react";
import recipesRequest from "../RecipesAPI";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: "",
      loading: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.getRecipes(this.state.search);
  }

  getRecipes = async e => {
    this.setState({
      loading: true
    });

    await recipesRequest(e).then(response => {
      this.setState({
        recipes: response,
        loading: false
      });
      console.log(this.state.recipes);
    });
  };

  handleInput = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  render() {
    return (
      <div className="recipes-searchbar">
        <form>
          <input
            type="search"
            placeholder="Search recipes..."
            onChange={this.handleInput}
          ></input>
        </form>
      </div>
    );
  }
}
