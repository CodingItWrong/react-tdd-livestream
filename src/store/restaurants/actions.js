import api from '../api';

export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(responseObject => {
      const responseBody = responseObject.data;
      const restaurants = responseBody.data;
      dispatch({
        type: STORE_RESTAURANTS,
        restaurants,
      });
    });
};

export const addRestaurant = (name) => (dispatch) => {
  const restaurant = {
    type: 'restaurants',
    attributes: {
      name,
    },
  };

  dispatch({
    type: ADD_RESTAURANT,
    restaurant,
  });

  return api.post(
    '/restaurants',
    { data: restaurant },
  );
};
