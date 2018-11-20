import { ADD_DISH } from './actions';

export default function dishes(state = {}, action) {
  switch (action.type) {
  case ADD_DISH:
    const { restaurantName, dishName } = action;
    const newDishes = [
      ...(state[restaurantName] || []),
      dishName,
    ];
    return {
      ...state,
      [restaurantName]: newDishes,
    };
  default:
    return state;
  }
}
