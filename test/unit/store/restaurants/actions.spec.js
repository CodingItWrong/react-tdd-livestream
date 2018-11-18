import restaurantReducer from '../../../../src/store/restaurants/reducers';
import {
  STORE_RESTAURANTS,
  ADD_RESTAURANT,
  loadRestaurants,
  addRestaurant,
} from '../../../../src/store/restaurants/actions';
import api from '../../../../src/api';
jest.mock('../../../../src/api');

describe('restaurant actions', () => {
  describe('loadRestaurants', () => {
    it('stores restaurants from the API', () => {
      const restaurants = [
        {
          type: 'restaurants',
          id: '1',
          attributes: {
            title: 'Sushi Place',
          },
        },
        {
          type: 'restaurants',
          id: '2',
          attributes: {
            title: 'Burger Place',
          },
        },
      ];

      api.get.mockResolvedValue({
        data: {
          data: restaurants,
        },
      });

      const dispatch = jest.fn();

      return loadRestaurants()(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({
            type: STORE_RESTAURANTS,
            restaurants,
          });
        });
    });
  });

  describe('addRestaurant', () => {
    let dispatch;

    const title = 'Sushi Place';
    const restaurant = {
      type: 'restaurants',
      id: '1',
      attributes: { title },
    };

    beforeEach(() => {
      dispatch = jest.fn();
      api.post.mockResolvedValue({
        data: {
          data: restaurant,
        },
      });

      return addRestaurant(title)(dispatch);
    });

    it('saves the restaurant to the API', () => {
      expect(api.post).toHaveBeenCalledWith(
        '/restaurants',
        {
          data: {
            type: 'restaurants',
            attributes: { title },
          },
        },
      );
    });

    it('adds the restaurant to the state', () => {
      expect(dispatch).toHaveBeenCalledWith({
        type: ADD_RESTAURANT,
        restaurant,
      });
    });
  });
});
