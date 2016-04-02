import { promiseDispatch } from '../app';

export const EMPTY_CART = 'EMPTY_CART';

export const emptyCart = () => promiseDispatch({ type: EMPTY_CART });
