export const CHANGE_ORDER_ADDRESS = 'CHANGE_ORDER_ADDRESS';

export function changeOrderAddress(kind, data) {
  return { type: CHANGE_ORDER_ADDRESS, kind: kind, data: data };
}
