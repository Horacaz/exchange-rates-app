import mapCurrency from '../mappers/currency.js';

function clearCurrencyTable() {
  const $table = document.querySelector('#currency-table');
  $table.replaceChildren();
}

function createExchanteRatesTable(baseCurrency, currencies) {
  clearCurrencyTable();
  const { currenciesNames } = currencies;
  const currencyRate = baseCurrency.conversionRates;

  const $table = document.querySelector('#currency-table');

  for (let i = 0; i < currenciesNames.length; i += 1) {
    const $tableCurrencyCode = document.createElement('td');
    $tableCurrencyCode.setAttribute('class', 'table-currency-code');
    $tableCurrencyCode.textContent = `${currenciesNames[i][0]}`;

    const $tableCurrencyName = document.createElement('td');
    $tableCurrencyName.setAttribute('class', 'table-currency-name');
    $tableCurrencyName.textContent = `${currenciesNames[i][1]}`;

    const $tableCurrencyRate = document.createElement('td');
    $tableCurrencyRate.setAttribute('class', 'table-currency-rate');
    $tableCurrencyRate.textContent = `${currencyRate[currenciesNames[i][0]]}`;

    const $tableRow = document.createElement('tr');
    $tableRow.setAttribute('class', 'table');

    $tableRow.appendChild($tableCurrencyCode);
    $tableRow.appendChild($tableCurrencyName);
    $tableRow.appendChild($tableCurrencyRate);

    $table.appendChild($tableRow);
  }
}

function exchangeRatesDate(baseCurrency) {
  const currentDate = baseCurrency.lastUpdate;
  const currentCurrency = document.querySelector('#base-currency-title');

  currentCurrency.textContent = baseCurrency.baseCode;
  const $currentDate = document.querySelector('#current-date');
  $currentDate.textContent = currentDate.slice(0, 16);
}

function showCurrencyEquivalency(baseCurrency, conversionRate, targetCurrency) {
  const $equivalency = document.querySelector('#equivalency');
  const $baseEquivalency = document.querySelector('#base-equivalency');
  const $targetEquivalency = document.querySelector('#target-equivalency');

  $baseEquivalency.textContent = `1 ${baseCurrency.baseCode}`;
  $targetEquivalency.textContent = `${conversionRate} ${targetCurrency}`;
  if ($equivalency.classList.contains('d-none')) {
    $equivalency.classList.remove('d-none');
  }
}

function calculateExchange(baseCurrency, amount, targetCurrency) {
  const $results = document.querySelector('#target-amount');
  const conversionRate = baseCurrency.conversionRates[targetCurrency];
  $results.value = conversionRate * amount;
  showCurrencyEquivalency(baseCurrency, conversionRate, targetCurrency);
}

export function createBaseCurrencyOptions(currencies) {
  const $baseCurrency = document.querySelector('#base-currency');
  const { currenciesNames } = currencies;

  for (let i = 0; i < currenciesNames.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', currenciesNames[i][0]);
    currency.textContent = `${currenciesNames[i][0]} - ${currenciesNames[i][1]}`;
    $baseCurrency.appendChild(currency);
  }
}

export function createTargetCurrencyOptions(currencies) {
  const $targetCurrency = document.querySelector('#target-currency');
  const { currenciesNames } = currencies;
  for (let i = 0; i < currenciesNames.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', currenciesNames[i][0]);
    currency.textContent = `${currenciesNames[i][0]} - ${currenciesNames[i][1]}`;
    $targetCurrency.appendChild(currency);
  }
}

function handleExchangeCalculation(baseCurrency, amount) {
  const $targetCurrency = document.querySelector('#target-currency');
  const targetCurrency = $targetCurrency.value;
  const currentAmount = Number(amount);
  if (targetCurrency !== '0' && targetCurrency !== undefined) calculateExchange(baseCurrency, currentAmount, targetCurrency);
}

function getExchange(baseCurrency, callBackFunction) {
  const $amount = document.querySelector('#base-amount');

  $amount.oninput = () => {
    callBackFunction(baseCurrency, $amount.value);
  };
}

export function handleExchange(currencies, callBackFunction) {
  const $baseCurrency = document.querySelector('#base-currency');
  $baseCurrency.oninput = async () => {
    const baseCurrency = await mapCurrency(await callBackFunction($baseCurrency.value));
    createExchanteRatesTable(baseCurrency, currencies);
    exchangeRatesDate(baseCurrency);
    getExchange(baseCurrency, handleExchangeCalculation);
  };
}
