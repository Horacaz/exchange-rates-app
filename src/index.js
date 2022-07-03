import { getCurrencyRates, getCurrenciesNames } from './exchanges.js';

import {
  createBaseCurrencyOptions,
  createTargetCurrencyOptions,
  createExchanteRatesTable,
  exchangeRatesDate,
  getExchange,
  $baseCurrency,
} from './ui.js';

function updateExchange(currencies) {
  $baseCurrency.oninput = async () => {
    class Currency {
      constructor(currency) {
        this.currency = currency;
      }
    }
    const baseCurrency = $baseCurrency.value;
    const currency = new Currency(await getCurrencyRates(baseCurrency));

    createExchanteRatesTable(currency, currencies);
    exchangeRatesDate(currency);
    getExchange(currency);
  };
}

async function initialize() {
  const currenciesNames = await getCurrenciesNames();

  createBaseCurrencyOptions(currenciesNames);
  createTargetCurrencyOptions(currenciesNames);
  updateExchange(currenciesNames);
}

initialize();
