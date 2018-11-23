import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Col,
  Row,
} from 'react-materialize';
import store from 'src/store';
import RestaurantListPage from './RestaurantListPage/index';
import RestaurantDetailPage from './RestaurantDetailPage/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Row>
            <Col s={12} m={10} l={8} offset="m1 l2">
              <Route
                path="/" exact
                component={RestaurantListPage}
              />
              <Route
                path="/restaurants/:name"
                component={RestaurantDetailPage}
              />
            </Col>
          </Row>
        </Router>
      </Provider>
    );
  }
}
