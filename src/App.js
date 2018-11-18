import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Col,
  Row,
} from 'react-materialize';
import RestaurantListPage from './RestaurantListPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Row>
          <Col s={12} m={10} l={8} offset="m1 l2">
            <Route path="/" exact component={RestaurantListPage} />
            <Route path="/restaurants/:name" component={RestaurantDetailPage} />
          </Col>
        </Row>
      </Router>
    );
  }
}
