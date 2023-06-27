import CurrencyService from './services/CurrencyService.js';
import StorageService from './services/StorageService.js';
import ExchangeRatesService from './services/ExchangeRatesService.js';
import handleExchange from './ui/currencyExchange.js';

export default async function initialize() {
  const ExchangeService = new ExchangeRatesService(
    new StorageService(),
    new CurrencyService()
  );
  const currenciesNames = await ExchangeService.getCurrencies();
  handleExchange(
    currenciesNames,
    ExchangeService.getCurrencyRates.bind(ExchangeService)
  );
}
