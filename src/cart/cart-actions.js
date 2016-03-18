import { dispatch } from '../app';

export const EMPTY_CART = 'EMPTY_CART';

export function emptyCart() {
  return dispatch({ type: EMPTY_CART });
}
