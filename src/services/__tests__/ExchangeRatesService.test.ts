import ExchangeRatesService from '../ExchangeRatesService';

const storageServiceMock = {
  getCurrenciesNames: jest.fn(),
  getCurrencyRates: jest.fn(),
  saveCurrencyRates: jest.fn(),
  saveCurrenciesNames: jest.fn()
};

const exchangeServiceMock = {
  getCurrenciesNames: jest.fn(),
  getCurrencyRates: jest.fn()
};

beforeEach(() => {
  jest.clearAllMocks();
});
describe('ExchangeRatesService', () => {
  const newExchangeRatesService = new ExchangeRatesService(
    storageServiceMock,
    exchangeServiceMock
  );
  test('ExchangeRatesService can be instantiated', () => {
    expect(newExchangeRatesService).toBeInstanceOf(ExchangeRatesService);
  });
});
describe('ExchangeRatesService.getCurrencies', () => {
  const newExchangeRatesService = new ExchangeRatesService(
    storageServiceMock,
    exchangeServiceMock
  );
  test('getCurrenciesNames, calls storageService in try block', async () => {
    await newExchangeRatesService.getCurrencies();
    expect(storageServiceMock.getCurrenciesNames).toHaveBeenCalledTimes(1);
    expect(storageServiceMock.saveCurrenciesNames).toHaveBeenCalledTimes(0);
    expect(exchangeServiceMock.getCurrenciesNames).toHaveBeenCalledTimes(0);
  });
  test('getCurrenciesNames, calls exchangeService after entering in catch block', async () => {
    storageServiceMock.getCurrenciesNames.mockImplementationOnce(() => {
      throw new Error('Currencies not found');
    });
    await newExchangeRatesService.getCurrencies();
    expect(storageServiceMock.saveCurrenciesNames).toHaveBeenCalledTimes(1);
    expect(exchangeServiceMock.getCurrenciesNames).toHaveBeenCalledTimes(1);
  });
});
describe('ExchangeRatesService.getCurrencyRates', () => {
  const newExchangeRatesService = new ExchangeRatesService(
    storageServiceMock,
    exchangeServiceMock
  );
  test('getCurrencyRates, calls storageService in try block', async () => {
    await newExchangeRatesService.getCurrencyRates('USD');
    expect(storageServiceMock.getCurrencyRates).toHaveBeenCalledTimes(1);
    expect(storageServiceMock.saveCurrencyRates).toHaveBeenCalledTimes(0);
    expect(exchangeServiceMock.getCurrencyRates).toHaveBeenCalledTimes(0);
  });

  test('getCurrencyRates, calls exchangeService after entering in catch block', async () => {
    storageServiceMock.getCurrencyRates.mockImplementationOnce(() => {
      throw new Error('Currency rates not found');
    });
    await newExchangeRatesService.getCurrencyRates('USD');
    expect(storageServiceMock.saveCurrencyRates).toHaveBeenCalledTimes(1);
    expect(exchangeServiceMock.getCurrencyRates).toHaveBeenCalledTimes(1);
  });
});
