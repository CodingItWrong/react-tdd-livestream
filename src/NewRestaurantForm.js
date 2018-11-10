import React, { Component } from 'react';
import {
  Button,
  Input,
  Row,
} from 'react-materialize';
import { Formik } from 'formik';

export default class NewRestaurantForm extends Component {
  validate = (values) => {
    const errors = {};
    if (values.restaurantName === '') {
      errors.restaurantName = 'Cannot be blank';
    }
    return errors;
  }

  handleSave = (values, { resetForm }) => {
    const { restaurantName } = values;
    const { onSave } = this.props;

    onSave(restaurantName);
    resetForm();
  }

  handleCancel = ({ resetForm }) => () => {
    resetForm();
    this.props.onCancel();
  }

  renderForm = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          s={12}
          label="Restaurant Name"
          id="restaurantName"
          value={values.restaurantName}
          error={errors.restaurantName}
          onChange={handleChange}
          data-testid="newRestaurantName"
        />
      </Row>
      <Row>
        <Button
          type="button"
          data-testid="cancelAddRestaurantButton"
          onClick={this.handleCancel({ resetForm })}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          data-testid="saveNewRestaurantButton"
        >
          Save
        </Button>
      </Row>
    </form>
  )

  render() {
    return (
      <Formik
        initialValues={{ restaurantName: '' }}
        validate={this.validate}
        onSubmit={this.handleSave}
      >
        {this.renderForm}
      </Formik>
    );
  }
}
