import { combineReducers } from 'redux';
import restaurants from './restaurants/reducers';
import dishes from './dishes/reducers';

export default combineReducers({
  restaurants,
  dishes,
});
