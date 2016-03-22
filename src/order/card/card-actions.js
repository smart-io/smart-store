import {dispatch} from '../../app';

export const UPDATE_ORDER_CARD = 'UPDATE_ORDER_CARD';

export const updateOrderCard = card => dispatch({ type: UPDATE_ORDER_CARD, card });
