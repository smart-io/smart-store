import * as taxesActions from './taxes-actions';

export const add = tax => taxesActions.addTax(tax);
export const removeTax = index => taxesActions.removeTax(index);
export const resetTaxes = taxes => taxesActions.resetTaxes(taxes);
