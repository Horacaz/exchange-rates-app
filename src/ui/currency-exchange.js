const $baseCurrency = document.querySelector('#base-currency');
const $targetCurrency = document.querySelector('#target-currency');

class Currency {
  constructor(currencyData) {
    this.baseCode = currencyData.base_code;
    this.conversionRates = currencyData.conversion_rates;
    this.lastUpdate = currencyData.time_last_update_utc;
  }
}

function clearCurrencyTable() {
  const $table = document.querySelector('#currency-table');
  if ($table) {
    $table.replaceChildren();
  }
}

function createExchanteRatesTable(baseCurrency, currencyNames) {
  clearCurrencyTable();
  const currencies = currencyNames.supported_codes;
  const currencyRate = baseCurrency.conversionRates;

  const $table = document.querySelector('#currency-table');

  for (let i = 0; i < currencies.length; i += 1) {
    const $tableCurrencyCode = document.createElement('td');
    $tableCurrencyCode.setAttribute('class', 'table-currency-code');
    $tableCurrencyCode.textContent = `${currencies[i][0]}`;

    const $tableCurrencyName = document.createElement('td');
    $tableCurrencyName.setAttribute('class', 'table-currency-name');
    $tableCurrencyName.textContent = `${currencies[i][1]}`;

    const $tableCurrencyRate = document.createElement('td');
    $tableCurrencyRate.setAttribute('class', 'table-currency-rate');
    $tableCurrencyRate.textContent = `${currencyRate[currencies[i][0]]}`;

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
