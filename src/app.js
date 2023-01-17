import {
  getCurrencyRates,
  getCurrenciesNames,
} from './services/load-currency.js';

import {
  createBaseCurrencyOptions,
  createTargetCurrencyOptions,
  handleExchange,
} from './ui/currency-exchange.js';

import mapCurrencies from './mappers/currencies.js';

function updateExchange(currencies) {
  handleExchange(currencies, getCurrencyRates);
}

export default async function initialize() {
  const currenciesNames = await mapCurrencies(await getCurrenciesNames());
  createBaseCurrencyOptions(currenciesNames);
  createTargetCurrencyOptions(currenciesNames);
  updateExchange(currenciesNames);
}
