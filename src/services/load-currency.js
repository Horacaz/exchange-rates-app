import { getCurrenciesNamesStorage, getCurrencyRatesStorage } from '../storage/storage.js';

const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';

export function getCurrencyRates(base = 'USD') {
  try {
    return getCurrencyRatesStorage(base);
  } catch (error) {
    return fetch(`${URL}/latest/${base}`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(base, JSON.stringify(data));
        return data;
      });
  }
}

export function getCurrenciesNames() {
  try {
    return getCurrenciesNamesStorage();
  } catch (error) {
    return fetch(`${URL}/codes`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('currencies', JSON.stringify(data));
        return data;
      });
  }
}
