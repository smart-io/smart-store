export const CHANGE_ORDER_CARD = 'CHANGE_CARD';

export function changeOrderCard(data) {
  return { type: CHANGE_ORDER_CARD, data: data };
}
