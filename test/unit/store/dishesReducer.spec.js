import { ADD_DISH } from 'store/dishes/actions';
import dishes from 'store/dishes/reducers';

describe('dishes reducer', () => {
  describe('ADD_DISH', () => {
    it('adds a dish for the specified restaurant', () => {
      const state = {};

      const restaurantName = 'Sushi Place';
      const dishName = 'Volcano Roll';

      const result = dishes(state, {
        type: ADD_DISH,
        restaurantName,
        dishName,
      });

      expect(result[restaurantName]).toEqual([dishName]);
    });
  });
});
