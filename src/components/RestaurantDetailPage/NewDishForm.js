import React, { Component } from 'react';
import {
  Button,
  Input,
  Row,
} from 'react-materialize';
import { Formik } from 'formik';

export default class NewDishForm extends Component {
  handleSave = (values) => {
    const { dishName } = values;
    const { onSave } = this.props;

    onSave(dishName);
  }

  renderForm = ({
    values,
    handleChange,
    handleSubmit,
  }) => (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          s={12}
          label="Dish Name"
          id="dishName"
          value={values.dishName}
          onChange={handleChange}
          data-testid="newDishName"
        />
      </Row>
      <Row>
        <Button
          type="submit"
          data-testid="saveNewDishButton"
        >
          Save
        </Button>
      </Row>
    </form>
  )

  render() {
    return (
      <Formik
        initialValues={{ dishName: '' }}
        onSubmit={this.handleSave}
      >
        {this.renderForm}
      </Formik>
    );
  }
}
