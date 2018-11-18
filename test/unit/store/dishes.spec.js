import { createStore } from 'redux';
import dishReducer from '../../../src/store/dishes/reducers';
import { addDish } from '../../../src/store/dishes/actions';

describe('restaurants', () => {
  let store;

  beforeEach(() => {
    store = createStore(dishReducer);
  });

  it('initializes the dish list to empty', () => {
    expect(store.getState()).toEqual([]);
  });

  it('can add a dish to the list', () => {
    const restaurant = 'Volcano Roll';
    store.dispatch(addDish(restaurant));
    expect(store.getState()).toEqual([restaurant]);
  });
});
