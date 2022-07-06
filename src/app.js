import { getCurrencyRates, getCurrenciesNames } from './services/exchanges.js';

import {
  createBaseCurrencyOptions,
  createTargetCurrencyOptions,
  handleExchange,
} from './ui/currency-input.js';

function updateExchange(currencies) {
  handleExchange(currencies, getCurrencyRates);
}

export default async function initialize() {
  const currenciesNames = await getCurrenciesNames();

  createBaseCurrencyOptions(currenciesNames);
  createTargetCurrencyOptions(currenciesNames);
  updateExchange(currenciesNames);
}
