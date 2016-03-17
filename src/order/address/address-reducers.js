import defaultOrder from '../order';
import defaultAddress from './address';
import * as actions from './address-actions';

function changeAddress(state, kind, data) {
  state = {
    ...defaultOrder,
    ...state
  };

  switch (kind) {
  case 'shipping': state.shipping_address = { ...defaultAddress, ...data }; break;
  case 'billing': state.billing_address = { ...defaultAddress, ...data }; break;
  }

  return state;
}

export default function(state = {}, action) {
  switch (action.type) {
  case actions.CHANGE_ORDER_ADDRESS:
    state = changeAddress(state, action.kind, action.data);
    return state;

  default:
    return state;
  }
}
