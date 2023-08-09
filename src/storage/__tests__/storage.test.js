import { getCurrenciesNamesFromStorage, getCurrencyRatesFromStorage, saveCurrenciesNamesInStorage, saveCurrencyRatesInStorage } from '../storage';
var currenciesNamesDataMock = {
    supportedCodes: []
};
var currencyRatesDataMock = {
    conversionRates: {},
    baseCode: '',
    lastUpdate: ''
};
beforeEach(function () {
    var localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn()
    };
    global.localStorage = localStorageMock;
});
test('Retrieves currencies names from localStorage', function () {
    JSON.parse = jest.fn();
    getCurrenciesNamesFromStorage();
    expect(JSON.parse).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('currencies');
});
test('Throws an error when retriving currencies names from localStorage', function () {
    JSON.parse = jest.fn().mockReturnValue(null);
    expect(function () { return getCurrenciesNamesFromStorage(); }).toThrowError('The currencies were not found.');
});
test('Retrieves a currency rates from localSorage', function () {
    JSON.parse = jest.fn();
    getCurrencyRatesFromStorage('USD');
    expect(JSON.parse).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('USD');
});
test('Throws an error when failed to retrieve a currency rate from localStorage', function () {
    JSON.parse = jest.fn().mockReturnValue(null);
    expect(function () { return getCurrencyRatesFromStorage('USD'); }).toThrowError('The searched currency was not found.');
});
test('Currency names are saved on localStorage', function () {
    saveCurrenciesNamesInStorage(currenciesNamesDataMock);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
});
test('Currency rates are saved on localStorage', function () {
    saveCurrencyRatesInStorage('USD', currencyRatesDataMock);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
});
//# sourceMappingURL=storage.test.js.map