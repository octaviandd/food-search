/** @format */

import React, { Component } from "react";
import Loading from "../components/Loading";
import AllFoodAPI from "../AllFoodAPI";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      active: "eggs",
      loading: false
    };

    this.getFood = this.getFood.bind(this);
    this.changeActive = this.changeActive.bind(this);
  }

  componentDidMount() {
    this.getFood(this.state.active);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.active !== this.state.active) {
      this.getFood(this.state.active);
    }
  }

  //New Search

  changeActive(newSearch) {
    this.setState({
      active: newSearch
    });
  }

  // Handle API JSON call

  getFood = async e => {
    this.setState({
      loading: true
    });

    await AllFoodAPI(e).then(response => {
      this.setState({
        data: response.data,
        loading: false
      });
    });
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="food-search-container">
        <h1 className="branded-food-title">Branded Food</h1>
        <SearchBar changeActive={this.changeActive} />
        <Dropdown
          branded_data={this.state.data.branded}
          common_data={this.state.data.common}
        />
      </div>
    );
  }
}
