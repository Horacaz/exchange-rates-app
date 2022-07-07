import {
  createExchanteRatesTable,
  exchangeRatesDate,
} from './exchange-table.js';

const $baseCurrency = document.querySelector('#base-currency');
const $targetCurrency = document.querySelector('#target-currency');

class Currency {
  constructor(currencyData) {
    this.baseCode = currencyData.base_code;
    this.conversionRates = currencyData.conversion_rates;
    this.lastUpdate = currencyData.time_last_update_utc;
  }
}

function calculateExchange(currency, amount, targetCurrency) {
  if (targetCurrency === '0') return;

  const $results = document.querySelector('#target-amount');
  const conversionRate = currency.conversionRates[targetCurrency];
  $results.value = conversionRate * amount;
}

export function createBaseCurrencyOptions(currencyNames) {
  const currencies = currencyNames.supported_codes;

  for (let i = 0; i < currencies.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', currencies[i][0]);
    currency.textContent = `${currencies[i][0]} - ${currencies[i][1]}`;
    $baseCurrency.appendChild(currency);
  }
}

export function createTargetCurrencyOptions(currencyNames) {
  const currencies = currencyNames.supported_codes;
  for (let i = 0; i < currencies.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', currencies[i][0]);
    currency.textContent = `${currencies[i][0]} - ${currencies[i][1]}`;
    $targetCurrency.appendChild(currency);
  }
}

function getExchange(baseCurrency) {
  const $amount = document.querySelector('#base-amount');

  $amount.oninput = () => {
    const targetCurrency = $targetCurrency.value;
    const currentAmount = Number($amount.value);
    calculateExchange(baseCurrency, currentAmount, targetCurrency);
  };
}

export function handleExchange(currencies, callBackFunction) {
  $baseCurrency.oninput = async () => {
    const baseCurrency = new Currency(await callBackFunction($baseCurrency.value));
    createExchanteRatesTable(baseCurrency, currencies);
    exchangeRatesDate(baseCurrency);
    getExchange(baseCurrency);
  };
}
