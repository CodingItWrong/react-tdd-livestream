import api from '../../api';

export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const addRestaurant = (title) => (dispatch) => {
  const restaurant = {
    type: 'restaurants',
    attributes: {
      title,
    },
  };
  return api.post('/restaurants', { data: restaurant })
    .then(({ data: responseBody }) => dispatch({
      type: ADD_RESTAURANT,
      restaurant: responseBody.data,
    }));
};

export const loadRestaurants = () => (dispatch) => {
  return api.get('/restaurants')
    .then(({ data: responseBody }) => dispatch({
      type: STORE_RESTAURANTS,
      restaurants: responseBody.data,
    }));
};
