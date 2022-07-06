function clearCurrencyTable() {
  const $table = document.querySelector('#currency-table');
  if ($table) {
    $table.replaceChildren();
  }
}

export function createExchanteRatesTable(currencyRates, currencyNames) {
  clearCurrencyTable();
  const currencies = currencyNames.supported_codes;
  const currencyRate = currencyRates.conversion_rates;
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

export function exchangeRatesDate(baseCurrency) {
  const currentDate = baseCurrency.time_last_update_utc;
  const currentCurrency = document.querySelector('#base-currency-title');
  currentCurrency.textContent = baseCurrency.base_code;
  const $currentDate = document.querySelector('#current-date');
  $currentDate.textContent = currentDate.slice(0, 16);
}
