/** @format */

import React from "react";
import recipesRequest from "../RecipesAPI";
import RecipesSearchBar from "../components/RecipesSearchBar";
import Loading from "../components/Loading";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";

console.log(CSSTransition);

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: "chicken",
      loading: false,
      isShowing: false
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
    console.log(newSearch);
    console.log(this.state.search);

    this.setState({
      search: newSearch
    });

    console.log(this.state.search);
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
    });
  };

  handleShow = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const items = this.state.recipes.map(item => {
      return item.recipe;
    });

    return (
      <React.Fragment>
        <RecipesSearchBar changeActive={this.changeActive} />
        <div className="recipe-container">
          {items.map((item, key) => {
            return (
              <article
                className="recipe-article"
                key={key}
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              >
                <div className="recipe-item">
                  {item.label}
                  <i
                    className="fas fa-info-circle"
                    onClick={this.handleShow}
                  ></i>
                </div>
                {this.state.isShowing ? (
                  <CSSTransition classNames="example">
                    <div className="recipe-info">{item.calories}</div>
                  </CSSTransition>
                ) : null}
              </article>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
