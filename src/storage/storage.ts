import { IParsedCurrency } from '../types/currency';
import { IParsedCurrencies } from '../types/currencies';
export function getCurrencyRatesFromStorage(base: string) {
  const baseCurrency = JSON.parse(localStorage.getItem(base) as string);
  if (baseCurrency === null) {
    throw new Error('The searched currency was not found.');
  }
  return baseCurrency;
}

export function getCurrenciesNamesFromStorage() {
  const currencies = JSON.parse(localStorage.getItem('currencies') as string);
  if (currencies === null) {
    throw new Error('The currencies were not found.');
  }
  return currencies;
}

export function saveCurrenciesNamesInStorage(data: IParsedCurrencies) {
  localStorage.setItem('currencies', JSON.stringify(data));
}

export function saveCurrencyRatesInStorage(
  base: string,
  data: IParsedCurrency
) {
  localStorage.setItem(base, JSON.stringify(data));
}
