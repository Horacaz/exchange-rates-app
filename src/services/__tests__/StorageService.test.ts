import {
  saveCurrenciesNamesInStorage,
  saveCurrencyRatesInStorage,
  getCurrenciesNamesFromStorage,
  getCurrencyRatesFromStorage
} from '../../storage/storage.js';
import StorageService from '../StorageService.js';
jest.mock('../../storage/storage.js');
describe('StorageService', () => {
  test('StorageService can be instanciated', () => {
    const newStorageService = new StorageService();
    expect(newStorageService).toBeInstanceOf(StorageService);
  });
});
describe('StorageService.saveCurrenciesNames', () => {
  test('StorageService.saveCurrenciesNames is a function', () => {
    const newStorageService = new StorageService();
    expect(typeof newStorageService.saveCurrenciesNames).toEqual('function');
  });

  test("StorageService.saveCurrenciesNames calls 'saveCurrenciesNamesInStorage' function", () => {
    const newStorageService = new StorageService();
    const dataCurrenciesMock = {
      supportedCodes: [['USD', 'ARS']]
    };
    newStorageService.saveCurrenciesNames(dataCurrenciesMock);
    expect(saveCurrenciesNamesInStorage).toHaveBeenCalledTimes(1);
    expect(saveCurrenciesNamesInStorage).toHaveBeenCalledWith(
      dataCurrenciesMock
    );
  });
});
describe('StorageService.saveCurrencyRates', () => {
  test('StorageService.saveCurrencyRates is a function', () => {
    const newStorageService = new StorageService();
    expect(typeof newStorageService.saveCurrencyRates).toEqual('function');
  });
  test("StorageService.saveCurrencyRates calls 'saveCurrencyRatesInStorage' function", () => {
    const newStorageService = new StorageService();
    const currencyRatesDataMock = {
      baseCode: 'USD',
      conversionRates: {
        USD: 1,
        ARS: 2
      },
      lastUpdate: '2022-12-01'
    };
    newStorageService.saveCurrencyRates('USD', currencyRatesDataMock);
    expect(saveCurrencyRatesInStorage).toHaveBeenCalledTimes(1);
    expect(saveCurrencyRatesInStorage).toHaveBeenCalledWith(
      'USD',
      currencyRatesDataMock
    );
  });
});
describe('StorageService.getCurrenciesNames', () => {
  test('StorageService.getCurrenciesNames is a function', () => {
    const newStorageService = new StorageService();
    expect(typeof newStorageService.getCurrenciesNames).toEqual('function');
  });
  test("StorageService.getCurrenciesNames  calls 'getCurrenciesNamesFromStorage' function", () => {
    const newStorageService = new StorageService();
    newStorageService.getCurrenciesNames();
    expect(getCurrenciesNamesFromStorage).toHaveBeenCalledTimes(1);
  });
});
describe('StorageService.getCurrencyRates', () => {
  test('StorageService.getCurrencyRates is a function', () => {
    const newStorageService = new StorageService();
    expect(typeof newStorageService.getCurrencyRates).toEqual('function');
  });

  test("StorageService.getCurrenciesNames  calls 'getCurrencyRatesFromStorage' function", () => {
    const newStorageService = new StorageService();
    newStorageService.getCurrencyRates('USD');
    expect(getCurrencyRatesFromStorage).toHaveBeenCalledTimes(1);
    expect(getCurrencyRatesFromStorage).toHaveBeenCalledWith('USD');
  });
});
