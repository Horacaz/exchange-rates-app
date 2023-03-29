import {
  getCurrenciesNamesFromStorage,
  getCurrencyRatesFromStorage,
} from "../storage/storage.js";

import {
  getCurrenciesNamesFromApi,
  getCurrencyRatesFromApi,
} from "../api/exchange.js";

export function getCurrencyRates(base = "USD") {
  try {
    return getCurrencyRatesFromStorage(base);
  } catch (error) {
    return getCurrencyRatesFromApi(base);
  }
}

export function getCurrenciesNames() {
  try {
    return getCurrenciesNamesFromStorage();
  } catch (error) {
    return getCurrenciesNamesFromApi();
  }
}
