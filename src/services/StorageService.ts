import {
  saveCurrenciesNamesInStorage,
  saveCurrencyRatesInStorage,
  getCurrenciesNamesFromStorage,
  getCurrencyRatesFromStorage
} from '../storage/storage.js';
import { IParsedCurrency } from '../types/currency.js';
import { IParsedCurrencies } from '../types/currencies.js';
export default class StorageService {
  saveCurrenciesNames(data: IParsedCurrencies) {
    return saveCurrenciesNamesInStorage(data);
  }
  saveCurrencyRates(base: string, data: IParsedCurrency) {
    return saveCurrencyRatesInStorage(base, data);
  }
  getCurrenciesNames() {
    return getCurrenciesNamesFromStorage();
  }
  getCurrencyRates(base: string) {
    return getCurrencyRatesFromStorage(base);
  }
}
