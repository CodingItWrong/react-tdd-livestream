export const ADD_RESTAURANT = 'ADD_RESTAURANT';

export const addRestaurant = (name) => {
  return {
    type: ADD_RESTAURANT,
    name,
  };
};
