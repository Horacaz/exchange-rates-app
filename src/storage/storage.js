export function getCurrencyRatesFromStorage(base) {
  const baseCurrency = JSON.parse(localStorage.getItem(base));
  if (baseCurrency === null) {
    throw new Error('The searched currency was not found.');
  }
  console.log(baseCurrency);
  return baseCurrency;
}

export function getCurrenciesNamesFromStorage() {
  const currencies = JSON.parse(localStorage.getItem('currencies'));
  if (currencies === null) {
    throw new Error('The currencies were not found.');
  }
  console.log(currencies);
  return currencies;
}

export function saveCurrenciesNamesInStorage() {

}

export function saveCurrencyRatesInStorage() {

}
