export const ADD_DISH = 'ADD_DISH';

export const addDish = ({ restaurantName, dishName }) => {
  return {
    type: ADD_DISH,
    restaurantName,
    dishName,
  };
};
