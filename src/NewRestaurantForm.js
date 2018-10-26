import React, { Component } from 'react';
import {
  Button,
  Input,
  Row,
} from 'react-materialize';

export default class NewRestaurantForm extends Component {
  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <Row>
        <Input
          s={12} m={8} l={10}
          label="Restaurant Name"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName"
        />
        <Button
          s={12} m={4} l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </Row>
    );
  }
}
