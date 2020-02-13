/** @format */

import React from "react";
import recipesRequest from "../RecipesAPI";
import RecipesSearchBar from "../components/RecipesSearchBar";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: "chicken",
      loading: false
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.changeActive = this.changeActive.bind(this);
  }

  componentDidMount() {
    this.getRecipes(this.state.search);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getRecipes(this.state.search);
    }
  }

  changeActive(newSearch) {
    this.setState({
      search: newSearch
    });
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

  render() {
    return (
      <React.Fragment>
        <RecipesSearchBar changeActive={this.changeActive} />
      </React.Fragment>
    );
  }
}
