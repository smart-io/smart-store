import { dispatch } from '../app';

export const EMPTY_CART = 'EMPTY_CART';

export const emptyCart = () => dispatch({ type: EMPTY_CART });
