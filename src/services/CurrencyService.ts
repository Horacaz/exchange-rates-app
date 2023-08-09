import {
  getCurrenciesNamesFromApi,
  getCurrencyRatesFromApi
} from '../api/exchange.js';
import mapCurrencies from '../mappers/currencies.js';
import mapCurrency from '../mappers/currency.js';

export default class CurrencyService {
  async getCurrenciesNames() {
    return mapCurrencies(await getCurrenciesNamesFromApi());
  }
  async getCurrencyRates(base: string) {
    return mapCurrency(await getCurrencyRatesFromApi(base));
  }
}
