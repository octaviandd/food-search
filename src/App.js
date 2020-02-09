/** @format */

import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import nutritionRequest from "./NutritionAPI";
import foodItemRequest from "./FoodAPI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      active: "eggs",
      NIX_ID: "",
      food_name: "",
      loading: false
    };

    this.getFood = this.getFood.bind(this);
    this.changeActive = this.changeActive.bind(this);
    this.checkData = this.checkData.bind(this);
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

    await foodItemRequest(e).then(response => {
      this.setState({
        data: response.data,
        loading: false
      });
      console.log(this.state.data);
    });
    // await nutritionRequest(this.state.nix_item_id).then(response => {
    //   console.log(response);
    // });
  };

  checkData(e) {
    console.log(e.target.dataset.nix);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div>
        <SearchBar changeActive={this.changeActive} />
        <Dropdown
          branded_data={this.state.data.branded}
          common_data={this.state.data.common}
          getDataSet={this.checkData}
          data-example={"hello"}
        />
      </div>
    );
  }
}

export default App;
