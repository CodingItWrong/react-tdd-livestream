import { createStore } from 'redux';
import restaurantReducer from '../../../src/store/restaurants/reducers';
import { addRestaurant } from '../../../src/store/restaurants/actions';

describe('restaurants', () => {
  let store;

  beforeEach(() => {
    store = createStore(restaurantReducer);
  });

  it('initializes the restaurant list to empty', () => {
    expect(store.getState()).toEqual([]);
  });

  it('can add a restaurant to the list', () => {
    const restaurant = 'Sushi Place';
    store.dispatch(addRestaurant(restaurant));
    expect(store.getState()).toEqual([restaurant]);
  });
});
