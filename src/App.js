import React from 'react';
import RestaurantListPage from './RestaurantListPage';
import {
  Col,
  Row,
} from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestaurantListPage />
        </Col>
      </Row>
    );
  }
}
