import CurrencyService from '../CurrencyService';
import mapCurrencies from '../../mappers/currencies';
import mapCurrency from '../../mappers/currency';
import {
  getCurrenciesNamesFromApi,
  getCurrencyRatesFromApi
} from '../../api/exchange';

jest.mock('../../api/exchange');
jest.mock('../../mappers/currencies');
jest.mock('../../mappers/currency');

describe('CurrencyService', () => {
  test('CurrencyService can be instantiated', () => {
    const newCurrencyService = new CurrencyService();
    expect(newCurrencyService).toBeInstanceOf(CurrencyService);
  });
});

describe('CurrencyService.getCurrenciesNames', () => {
  test('CurrencyService.getCurrenciesNames is a function', () => {
    const newService = new CurrencyService();
    expect(typeof newService.getCurrenciesNames).toEqual('function');
  });
  test('CurrencyService.getCurrenciesNames succesfully calls api service and mapper', async () => {
    const newService = new CurrencyService();
    await newService.getCurrenciesNames();
    expect(getCurrenciesNamesFromApi).toHaveBeenCalledTimes(1);
    expect(mapCurrencies).toHaveBeenCalledTimes(1);
  });
});
describe('CurrencyService.getCurrencyRates', () => {
  test('CurrencyService.getCurrenciesRates is a function', () => {
    const newService = new CurrencyService();
    expect(typeof newService.getCurrencyRates).toEqual('function');
  });
  test('CurrencyService.getCurrencyRates succesfully calls api service and mapper', async () => {
    const newService = new CurrencyService();
    await newService.getCurrencyRates('base');
    expect(getCurrencyRatesFromApi).toHaveBeenCalledTimes(1);
    expect(mapCurrency).toHaveBeenCalledTimes(1);
  });
});
