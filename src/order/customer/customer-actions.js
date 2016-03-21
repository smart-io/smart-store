import { dispatch } from '../../app';

export const UPDATE_ORDER_CUSTOMER = 'UPDATE_ORDER_CUSTOMER';

export const updateOrderCustomer = customer => dispatch({ type: UPDATE_ORDER_CUSTOMER, customer });
