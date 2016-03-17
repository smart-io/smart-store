import defaultOrder from '../order';
import defaultCustomer from './customer';
import * as actions from './customer-actions';

function changeCustomer(state, data) {
  return {
    ...defaultOrder,
    ...state,
    customer: { ...defaultCustomer, ...data }
  };
}

export default function (state = {}, action) {
  switch (action.type) {
  case actions.CHANGE_ORDER_CUSTOMER:
    state = changeCustomer(state, action.data);
    return state;

  default:
    return state;
  }
}
