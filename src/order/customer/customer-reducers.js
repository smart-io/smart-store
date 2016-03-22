import {defaultOrder} from '../order';
import {defaultCustomer} from './customer';
import * as actions from './customer-actions';

export default function (state = {}, action) {
  switch (action.type) {
  case actions.UPDATE_ORDER_CUSTOMER:
    return { ...defaultOrder, ...state, customer: { ...defaultCustomer, ...action.customer } };

  default:
    return state;
  }
}
