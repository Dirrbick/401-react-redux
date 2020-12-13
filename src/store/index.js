import { createStore, combineReducers } from 'redux';

import categoriesReducer from './categories.js';
// import productsReducer from './products.js';
// import cartReducer from './cart.js';

const reducers = combineReducers({
  categories: categoriesReducer,
  // products: productsReducer,
  // cart: cartReducer
});

export default createStore(reducers);