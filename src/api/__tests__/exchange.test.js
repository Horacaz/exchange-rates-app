import { getCurrenciesNamesFromApi, getCurrencyRatesFromApi } from '../exchange';
var URL = 'https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b';
beforeEach(function () {
    global.fetch = jest.fn();
});
describe('getCurrenciesNamesFromApi', function () {
    test('Currency names succesfully retrieved from Api', function () {
        global.fetch = jest.fn(function () {
            return new Promise(function (resolve) {
                var jsonPromise = new Promise(function (r) {
                    r({});
                });
                resolve({ json: function () { return jsonPromise; } });
            });
        });
        getCurrenciesNamesFromApi();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("".concat(URL, "/codes"));
    });
    test('Currency names failed to be retrieved from Api', function () {
        expect(getCurrenciesNamesFromApi()).rejects.toThrow("Failed to retrieve currencies names from Api");
    });
});
describe('getCurrencyRatesFromApi', function () {
    test('Currency rates retrieved succesfully from Api', function () {
        global.fetch = jest.fn(function () {
            return new Promise(function (resolve) {
                var jsonPromise = new Promise(function (r) {
                    r({});
                });
                resolve({ json: function () { return jsonPromise; } });
            });
        });
        getCurrencyRatesFromApi('USD');
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("".concat(URL, "/latest/USD"));
    });
    test('Currency rates retrieves USD rates if no currency is specified', function () {
        var defaultURL = "https://v6.exchangerate-api.com/v6/aa91db0af07de43e0e36201b/latest/USD";
        global.fetch = jest.fn(function () {
            return new Promise(function (resolve) {
                var jsonPromise = new Promise(function (r) {
                    r({});
                });
                resolve({ json: function () { return jsonPromise; } });
            });
        });
        getCurrencyRatesFromApi();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(defaultURL);
    });
    test('Currency rates of a specific currency failed to be retrieved from Api', function () {
        expect(getCurrencyRatesFromApi('USD')).rejects.toThrow("Failed to retrieve currencies rates from Api");
    });
});
//# sourceMappingURL=exchange.test.js.map