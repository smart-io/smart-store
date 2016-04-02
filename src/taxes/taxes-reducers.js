import * as taxesActions from './taxes-actions';
import {defaultTax} from './tax';
import * as taxesMethods from './taxes';

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
    state = addTax(state, action.tax);
    break;

  case taxesActions.REMOVE_TAX:
    state = removeTax(state, action.index);
    break;

  case taxesActions.RESET_TAXES:
    state = resetTaxes(action.taxes);
    break;
  }

  state.__proto__ = taxesMethods;
  return state;
}
