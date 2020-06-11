import { TOGGLE_CART, ADD_ITEMS } from './cart.types';

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const addItems = item => ({
  type: ADD_ITEMS,
  payload: item
})
