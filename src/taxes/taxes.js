import * as taxesActions from './taxes-actions';

export const add = tax => taxesActions.addTax(tax);
export const remove = index => taxesActions.removeTax(index);
export const reset = taxes => taxesActions.resetTaxes(taxes);
