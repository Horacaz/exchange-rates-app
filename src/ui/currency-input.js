import {
  createExchanteRatesTable,
  exchangeRatesDate,
} from './exchange-table.js';

const $baseCurrency = document.querySelector('#base-currency');
const $targetCurrency = document.querySelector('#target-currency');

function calculateExchange(currencyRates, amount, targetCurrency) {
  if (targetCurrency === '0') return;
  const $results = document.querySelector('#target-amount');
  const conversionRates = currencyRates.conversion_rates[targetCurrency];
  $results.value = conversionRates * amount;
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

function getExchange(currencyRates) {
  const currencyRate = currencyRates;

  const $amount = document.querySelector('#base-amount');

  $amount.oninput = () => {
    const targetCurrency = $targetCurrency.value;
    const currentAmount = Number($amount.value);
    calculateExchange(currencyRate, currentAmount, targetCurrency);
  };
}

export function handleExchange(currencies, callBackFunction) {
  $baseCurrency.oninput = async () => {
    const baseCurrency = $baseCurrency.value;
    const currencyRates = await callBackFunction(baseCurrency);
    createExchanteRatesTable(currencyRates, currencies);
    exchangeRatesDate(currencyRates);
    getExchange(currencyRates);
  };
}
