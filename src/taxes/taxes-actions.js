import { promiseDispatch } from '../app';

export const ADD_TAX = 'ADD_TAX';
export const REMOVE_TAX = 'REMOVE_TAX';
export const RESET_TAXES = 'RESET_TAXES';

export const addTax = tax => promiseDispatch({ type: ADD_TAX, tax: tax });
export const removeTax = index => promiseDispatch({ type: REMOVE_TAX, index: index });
export const resetTaxes = taxes => promiseDispatch({ type: RESET_TAXES, taxes: taxes });
