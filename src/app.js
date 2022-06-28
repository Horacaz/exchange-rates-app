import { getCurrencyRates, getCurrenciesNames } from './exchanges.js';

import {
  createExchanteRatesTable,
  exchangeRatesDate,
  getExchange,
} from './ui.js';

async function updateExchange() {
  const baseCurrency = 'USD';
  const currencyRates = await getCurrencyRates(baseCurrency);
  const currencies = await getCurrenciesNames();

  createExchanteRatesTable(currencyRates, currencies);
  exchangeRatesDate(currencyRates);
  getExchange(currencyRates);
}

updateExchange();
