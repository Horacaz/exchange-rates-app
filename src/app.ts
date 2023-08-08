import CurrencyService from './services/CurrencyService.js';
import StorageService from './services/StorageService.js';
import ExchangeRatesService from './services/ExchangeRatesService.js';
import handleExchange from './ui/currencyExchange.js';

export default async function initialize(): Promise<void>{
  const currencyService = new CurrencyService();
  const storageService = new StorageService();
  const exchangeService = new ExchangeRatesService(
    storageService,
    currencyService
  );
  const currenciesNames = await exchangeService.getCurrencies();
  handleExchange(
    currenciesNames,
    exchangeService.getCurrencyRates.bind(exchangeService)
  );
}