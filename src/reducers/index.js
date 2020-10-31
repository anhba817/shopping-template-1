import { combineReducers } from 'redux';
import appearanceReducer from './appearance';
import productReducer from './products';

const myReducer = combineReducers({
  appearance: appearanceReducer,
  products: productReducer,
});

export default myReducer;
