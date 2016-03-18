import * as actions from './taxes-actions';
import taxDefault from './tax';

function addTax(state, tax) {
  return [ ...state, { ...taxDefault, ...tax } ];
}

function removeTax(state, index) {
  return [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ];
}

function resetTaxes(taxes) {
  let state = [];
  for (let i = 0, len = taxes.length; i < len; ++i) {
    state.push({ ...taxDefault, ...taxes[i] });
  }
  return state;
}

export default function(state = {}, action) {
  switch (action.type) {
  case actions.ADD_TAX:
    return addTax(state, action.tax);

  case actions.REMOVE_TAX:
    return removeTax(state, action.index);

  case actions.RESET_TAXES:
    return resetTaxes(action.index);

  default:
    return state;
  }
}
