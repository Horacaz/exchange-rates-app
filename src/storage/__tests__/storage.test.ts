import {
  getCurrenciesNamesFromStorage,
  getCurrencyRatesFromStorage,
  saveCurrenciesNamesInStorage,
  saveCurrencyRatesInStorage
} from '../storage';
import { IParsedCurrencies } from '../../types/currencies';
import { IParsedCurrency } from '../../types/currency';

const currenciesNamesDataMock: IParsedCurrencies = {
  supportedCodes: []
};
const currencyRatesDataMock: IParsedCurrency = {
  conversionRates: {},
  baseCode: '',
  lastUpdate: ''
};

beforeEach(() => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn()
  } as unknown as typeof localStorage;
  global.localStorage = localStorageMock;
});

test('Retrieves currencies names from localStorage', () => {
  JSON.parse = jest.fn();
  getCurrenciesNamesFromStorage();
  expect(JSON.parse).toHaveBeenCalledTimes(1);

  expect(localStorage.getItem).toHaveBeenCalledTimes(1);

  expect(localStorage.getItem).toHaveBeenCalledWith('currencies');
});

test('Throws an error when retriving currencies names from localStorage', () => {
  JSON.parse = jest.fn().mockReturnValue(null);
  expect(() => getCurrenciesNamesFromStorage()).toThrowError(
    'The currencies were not found.'
  );
});

test('Retrieves a currency rates from localSorage', () => {
  JSON.parse = jest.fn();

  getCurrencyRatesFromStorage('USD');
  expect(JSON.parse).toHaveBeenCalledTimes(1);

  expect(localStorage.getItem).toHaveBeenCalledTimes(1);

  expect(localStorage.getItem).toHaveBeenCalledWith('USD');
});

test('Throws an error when failed to retrieve a currency rate from localStorage', () => {
  JSON.parse = jest.fn().mockReturnValue(null);

  expect(() => getCurrencyRatesFromStorage('USD')).toThrowError(
    'The searched currency was not found.'
  );
});

test('Currency names are saved on localStorage', () => {
  saveCurrenciesNamesInStorage(currenciesNamesDataMock);

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
});

test('Currency rates are saved on localStorage', () => {
  saveCurrencyRatesInStorage('USD', currencyRatesDataMock);

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
});
