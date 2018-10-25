import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  handleShowNewRestaurantForm = () => {
    this.setState({ showNewRestaurantForm: true });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      showNewRestaurantForm: false,
      restaurantNames: [
        newRestaurantName,
        ...state.restaurantNames,
      ],
    }));
  }

  render() {
    const {
      restaurantNames,
      showNewRestaurantForm,
    } = this.state;
    return (
      <div>
        <button
          data-test="addRestaurantButton"
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </button>
        {
          showNewRestaurantForm
            ?
            <NewRestaurantForm
              onSave={this.handleAddRestaurant}
            />
            : null
        }
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}
