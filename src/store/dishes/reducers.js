import {
  ADD_DISH,
} from './actions';

export default function dishes(state = [], action) {
  switch (action.type) {
    case ADD_DISH:
      return [action.name, ...state];
    default:
      return state;
  }
}
