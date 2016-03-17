import defaultOrder from '../order';
import defaultCard from './card';
import * as actions from './card-actions';

function changeCard(state, data) {
  return {
    ...defaultOrder,
    ...state,
    card: { ...defaultCard, ...data }
  };
}

export default function (state = {}, action) {
  switch (action.type) {
  case actions.CHANGE_ORDER_CARD:
    state = changeCard(state, action.data);
    return state;

  default:
    return state;
  }
}
