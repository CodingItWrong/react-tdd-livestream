import React, { Component } from 'react';
import {
  Button,
  Col,
  Row,
} from 'react-materialize';
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

  renderNewRestaurantForm() {
    if (this.state.showNewRestaurantForm) {
      return (
        <NewRestaurantForm
          onSave={this.handleAddRestaurant}
        />
      );
    }
  }

  render() {
    const { restaurantNames } = this.state;
    return (
      <div>
        <Row>
          <Button
            data-test="addRestaurantButton"
            onClick={this.handleShowNewRestaurantForm}
          >
            Add Restaurant
          </Button>
        </Row>
        <Row>
          {this.renderNewRestaurantForm()}
        </Row>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}
