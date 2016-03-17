export const CHANGE_ORDER_CUSTOMER = 'CHANGE_ORDER_CUSTOMER';

export function changeOrderCustomer(data) {
  return { type: CHANGE_ORDER_CUSTOMER, data: data };
}
