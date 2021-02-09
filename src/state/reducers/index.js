import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import addItemImageReducer from './addItemImageReducer';
import categoriesReducer from './categoriesReducer';
import addCategoryReducer from './addCategoryReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  addItemImage: addItemImageReducer,
  categories: categoriesReducer,
  addCategory: addCategoryReducer,
});

export default reducers;
