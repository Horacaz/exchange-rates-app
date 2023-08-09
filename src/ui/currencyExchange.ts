import { IParsedCurrencies } from '../types/currencies';
import { IParsedCurrency } from '../types/currency';
function clearCurrencyTable() {
  const $table = document.querySelector('#currency-table') as HTMLElement;
  $table.replaceChildren();
}

function createExchanteRatesTable(
  baseCurrency: IParsedCurrency,
  currencies: IParsedCurrencies
) {
  clearCurrencyTable();
  const { supportedCodes } = currencies;
  const currencyRate = baseCurrency.conversionRates;

  const $table = document.querySelector('#currency-table') as HTMLElement;
  for (let i = 0; i < supportedCodes.length; i += 1) {
    const $tableCurrencyCode = document.createElement('td');
    $tableCurrencyCode.setAttribute('class', 'table-currency-code');
    $tableCurrencyCode.textContent = `${supportedCodes[i][0]}`;

    const $tableCurrencyName = document.createElement('td');
    $tableCurrencyName.setAttribute('class', 'table-currency-name');
    $tableCurrencyName.textContent = `${supportedCodes[i][1]}`;

    const $tableCurrencyRate = document.createElement('td');
    $tableCurrencyRate.setAttribute('class', 'table-currency-rate');
    $tableCurrencyRate.textContent = `${currencyRate[supportedCodes[i][0]]}`;

    const $tableRow = document.createElement('tr');
    $tableRow.setAttribute('class', 'table');

    $tableRow.appendChild($tableCurrencyCode);
    $tableRow.appendChild($tableCurrencyName);
    $tableRow.appendChild($tableCurrencyRate);

    $table.appendChild($tableRow);
  }
}

function exchangeRatesDate(baseCurrency: IParsedCurrency) {
  const currentDate = baseCurrency.lastUpdate;
  const currentCurrency = document.querySelector(
    '#base-currency-title'
  ) as HTMLElement;
  currentCurrency.textContent = baseCurrency.baseCode;
  const $currentDate = document.querySelector('#current-date') as HTMLElement;
  $currentDate.textContent = currentDate.slice(0, 16);
}

function showCurrencyEquivalency(
  baseCurrency: IParsedCurrency,
  conversionRate: number,
  targetCurrency: string
) {
  const $equivalency = document.querySelector('#equivalency') as HTMLElement;
  const $baseEquivalency = document.querySelector(
    '#base-equivalency'
  ) as HTMLElement;
  const $targetEquivalency = document.querySelector(
    '#target-equivalency'
  ) as HTMLElement;

  $baseEquivalency.textContent = `1 ${baseCurrency.baseCode}`;
  $targetEquivalency.textContent = `${conversionRate} ${targetCurrency}`;
  if ($equivalency.classList.contains('d-none')) {
    $equivalency.classList.remove('d-none');
  }
}

function calculateExchange(
  baseCurrency: IParsedCurrency,
  amount: number,
  targetCurrency: string
) {
  const $results = document.querySelector('#target-amount') as HTMLInputElement;
  const conversionRate = baseCurrency.conversionRates[targetCurrency];
  $results.value = (conversionRate * amount).toString();
  showCurrencyEquivalency(baseCurrency, conversionRate, targetCurrency);
}

function createBaseCurrencyOptions(currencies: IParsedCurrencies) {
  const $baseCurrency = document.querySelector('#base-currency') as HTMLElement;
  const { supportedCodes } = currencies;

  for (let i = 0; i < supportedCodes.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', supportedCodes[i][0]);
    currency.textContent = `${supportedCodes[i][0]} - ${supportedCodes[i][1]}`;
    $baseCurrency.appendChild(currency);
  }
}

function createTargetCurrencyOptions(currencies: IParsedCurrencies) {
  const $targetCurrency = document.querySelector(
    '#target-currency'
  ) as HTMLElement;
  const supportedCodes = currencies.supportedCodes;
  for (let i = 0; i < supportedCodes.length; i += 1) {
    const currency = document.createElement('option');
    currency.setAttribute('value', supportedCodes[i][0]);
    currency.textContent = `${supportedCodes[i][0]} - ${supportedCodes[i][1]}`;
    $targetCurrency.appendChild(currency);
  }
}

function handleExchangeCalculation(
  baseCurrency: IParsedCurrency,
  amount: string | number
) {
  const $targetCurrency = document.querySelector(
    '#target-currency'
  ) as HTMLInputElement;
  const targetCurrency = $targetCurrency.value;
  const currentAmount = Number(amount);
  if (targetCurrency !== '0' && targetCurrency !== undefined)
    calculateExchange(baseCurrency, currentAmount, targetCurrency);
}

function getExchange(
  baseCurrency: IParsedCurrency,
  callBackFunction: (baseCurrency: IParsedCurrency, amount: string) => void
) {
  const $amount = document.querySelector('#base-amount') as HTMLInputElement;

  $amount.oninput = () => {
    callBackFunction(baseCurrency, $amount.value);
  };
}

function generateCurrencyOptions(currencies: IParsedCurrencies) {
  createBaseCurrencyOptions(currencies);
  createTargetCurrencyOptions(currencies);
}
type ExchangeCallBack = (baseCurrency: string) => Promise<IParsedCurrency>;
export default function handleExchange(
  currencies: IParsedCurrencies,
  callBackFunction: ExchangeCallBack
) {
  generateCurrencyOptions(currencies);
  const $baseCurrency = document.querySelector(
    '#base-currency'
  ) as HTMLInputElement;
  $baseCurrency.oninput = async () => {
    const baseCurrency = await callBackFunction($baseCurrency.value);
    createExchanteRatesTable(baseCurrency, currencies);
    exchangeRatesDate(baseCurrency);
    getExchange(baseCurrency, handleExchangeCalculation);
  };
}
