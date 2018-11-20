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
  const partialRestaurant = {
    type: 'restaurants',
    attributes: {
      name,
    },
  };

  return api.post(
    '/restaurants',
    { data: partialRestaurant },
  ).then(responseObject => {
    const responseBody = responseObject.data;
    const restaurant = responseBody.data;

    dispatch({
      type: ADD_RESTAURANT,
      restaurant,
    });
  });
};
