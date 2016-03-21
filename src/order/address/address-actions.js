import { dispatch } from '../../app';

export const UPDATE_ORDER_BILLING_ADDRESS = 'UPDATE_ORDER_BILLING_ADDRESS';
export const UPDATE_ORDER_SHIPPING_ADDRESS = 'UPDATE_ORDER_SHIPPING_ADDRESS';

export const updateOrderBillingAddress = data => dispatch({ type: UPDATE_ORDER_BILLING_ADDRESS, data });
export const updateOrderShippingAddress = data => dispatch({ type: UPDATE_ORDER_SHIPPING_ADDRESS, data });
