export const ADD_TAX = 'ADD_TAX';
export const REMOVE_TAX = 'REMOVE_TAX';
export const RESET_TAXES = 'RESET_TAXES';

export function addTax(tax) {
  return { type: ADD_TAX, tax: tax };
}

export function removeTax(index) {
  return { type: REMOVE_TAX, index: index };
}

export function resetTaxes(taxes) {
  return { type: RESET_TAXES, taxes: taxes };
}
