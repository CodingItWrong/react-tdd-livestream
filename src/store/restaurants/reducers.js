import { ADD_RESTAURANT } from './actions';

export default function restaurants(state = [], action) {
  switch (action.type) {
  case ADD_RESTAURANT:
    return [action.name, ...state];
  default:
    return state;
  }
}
