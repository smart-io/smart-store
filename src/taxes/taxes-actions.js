import {dispatch} from '../app';

export const ADD_TAX = 'ADD_TAX';
export const REMOVE_TAX = 'REMOVE_TAX';
export const RESET_TAXES = 'RESET_TAXES';

export const addTax = tax => dispatch({ type: ADD_TAX, tax: tax });
export const removeTax = index => dispatch({ type: REMOVE_TAX, index: index });
export const resetTaxes = taxes => dispatch({ type: RESET_TAXES, taxes: taxes });
