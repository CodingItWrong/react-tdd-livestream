import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';

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
      <div>
        <Input
          label="Restaurant Name"
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName"
        />
        <Button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </div>
    );
  }
}
