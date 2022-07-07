export function getCurrencyRatesFromStorage(base) {
  const baseCurrency = JSON.parse(localStorage.getItem(base));
  if (baseCurrency === null) {
    throw new Error('The searched currency was not found.');
  }
  return baseCurrency;
}

export function getCurrenciesNamesFromStorage() {
  const currencies = JSON.parse(localStorage.getItem('currencies'));
  if (currencies === null) {
    throw new Error('The currencies were not found.');
  }
  return currencies;
}

export function saveCurrenciesNamesInStorage(currencies, data) {
  localStorage.setItem(currencies, JSON.stringify(data));
}

export function saveCurrencyRatesInStorage(base, data) {
  localStorage.setItem(base, JSON.stringify(data));
}
