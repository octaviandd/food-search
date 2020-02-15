/** @format */

import React from "react";
import recipesRequest from "../RecipesAPI";
import RecipesSearchBar from "../components/RecipesSearchBar";
import Loading from "../components/Loading";
import "../App.css";
import AnimateHeight from "react-animate-height";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      search: "chicken",
      loading: false,
      height: 0
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
    });
  };

  handleHeight = () => {
    this.setState({
      height: this.state.height === 0 ? "auto" : 0
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const items = this.state.recipes.map(item => {
      return item.recipe;
    });

    console.log(items);
    const size = 3;

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
                    onClick={this.handleHeight}
                  ></i>
                </div>
                <AnimateHeight duration={500} height={this.state.height}>
                  <div className="recipe-info">
                    <div className="recipe-calories">
                      {Math.floor(item.calories)} kcal
                    </div>
                    <div className="recipe-macros">
                      {item.digest.slice(0, size).map((el, key) => {
                        return (
                          <React.Fragment key={key}>
                            <div>
                              <p>{el.label}</p>
                              <p>
                                {Math.floor(el.total)}
                                {el.unit}
                              </p>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <div className="recipe-ingredients">
                      {item.ingredients.map((el, key) => {
                        return (
                          <ul key={key}>
                            <li>{el.text}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </AnimateHeight>
              </article>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
