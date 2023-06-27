import { getCurrenciesNamesFromApi, getCurrencyRatesFromApi } from '../exchange';

const URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';

beforeEach(() => {
  global.fetch = jest.fn();
});

describe('getCurrenciesNamesFromApi', () => {
  test('Currency names succesfully retrieved from Api', () => {
    global.fetch = jest.fn(
      () =>
        new Promise((resolve) => {
          const jsonPromise = new Promise((r) => {
            r({});
          });
          resolve({ json: () => jsonPromise } as Response);
        })
    );

    getCurrenciesNamesFromApi();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${URL}/codes`);
  });

  test('Currency names failed to be retrieved from Api', () => {
    expect(getCurrenciesNamesFromApi()).rejects.toThrow("Failed to retrieve currencies names from Api");
  });
});

describe('getCurrencyRatesFromApi', () => {
  test('Currency rates retrieved succesfully from Api', () => {
    global.fetch = jest.fn(
      () =>
        new Promise((resolve) => {
          const jsonPromise = new Promise((r) => {
            r({});
          });
          resolve({ json: () => jsonPromise } as Response);
        })
    );

    getCurrencyRatesFromApi('USD');
    expect(global.fetch).toHaveBeenCalledTimes(1);

    expect(global.fetch).toHaveBeenCalledWith(`${URL}/latest/USD`);
  });
  test('Currency rates of a specific currency failed to be retrieved from Api', () => {
    expect(getCurrencyRatesFromApi('USD')).rejects.toThrow("Failed to retrieve currencies rates from Api");
  });
});
