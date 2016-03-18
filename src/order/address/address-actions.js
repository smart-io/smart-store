import { dispatch } from '../../app';

export const CHANGE_ORDER_BILLING_ADDRESS = 'CHANGE_ORDER_BILLING_ADDRESS';
export const CHANGE_ORDER_SHIPPING_ADDRESS = 'CHANGE_ORDER_SHIPPING_ADDRESS';

export const changeOrderBillingAddress = data => dispatch({ type: CHANGE_ORDER_BILLING_ADDRESS, data });
export const changeOrderShippingAddress = data => dispatch({ type: CHANGE_ORDER_SHIPPING_ADDRESS, data });
