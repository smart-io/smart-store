import defaultOrder from '../order';
import defaultCard from './card';
import * as actions from './card-actions';

export default function (state = {}, action) {
  switch (action.type) {
  case actions.UPDATE_ORDER_CARD:
    return { ...defaultOrder, ...state, card: { ...defaultCard, ...action.card } };

  default:
    return state;
  }
}
