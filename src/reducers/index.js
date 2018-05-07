import { combineReducers } from 'redux';
import WeathereReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeathereReducer
});

export default rootReducer;
