import * as taxesActions from './taxes-actions';
import {defaultTax} from './tax';

function addTax(state, tax) {
  state = [...state, { ...defaultTax, ...tax }];
  return state;
}

function removeTax(state, index) {
  state = [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ];
  return state;
}

function resetTaxes(taxes) {
  let state = [];
  if (taxes && taxes.length) {
    for (let i = 0, len = taxes.length; i < len; ++i) {
      state.push({ ...defaultTax, ...taxes[i] });
    }
  }
  return state;
}

export default function (state = [], action) {
  switch (action.type) {
  case taxesActions.ADD_TAX:
    return addTax(state, action.tax);

  case taxesActions.REMOVE_TAX:
    return removeTax(state, action.index);

  case taxesActions.RESET_TAXES:
    return resetTaxes(action.index);

  default:
    return state;
  }
}
