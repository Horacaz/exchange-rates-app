import StorageService from './StorageService.js';
import CurrencyService from './CurrencyService.js';

export default class ExchangeRatesService {
  exchange: CurrencyService;
  storage: StorageService;
  constructor(
    StorageService: StorageService,
    CurrencyService: CurrencyService
  ) {
    this.exchange = CurrencyService;
    this.storage = StorageService;
  }
  async getCurrencies() {
    try {
      return this.storage.getCurrenciesNames();
    } catch (e) {
      const currenciesNames = await this.exchange.getCurrenciesNames();
      this.storage.saveCurrenciesNames(currenciesNames);
      return currenciesNames;
    }
  }
  async getCurrencyRates(currencyBase: string) {
    try {
      return this.storage.getCurrencyRates(currencyBase);
    } catch (e) {
      const currencyRates = await this.exchange.getCurrencyRates(currencyBase);
      this.storage.saveCurrencyRates(currencyBase, currencyRates);
      return currencyRates;
    }
  }
}
