export const ADD_DISH = 'ADD_DISH';

export const addDish = (name) => {
  return {
    type: ADD_DISH,
    name,
  };
};
