import { saveCurrenciesNamesInStorage, saveCurrencyRatesInStorage, getCurrenciesNamesFromStorage, getCurrencyRatesFromStorage } from '../../storage/storage.js';
import StorageService from '../StorageService.js';
jest.mock('../../storage/storage.js');
describe('StorageService', function () {
    test('StorageService can be instanciated', function () {
        var newStorageService = new StorageService();
        expect(newStorageService).toBeInstanceOf(StorageService);
    });
});
describe('StorageService.saveCurrenciesNames', function () {
    test('StorageService.saveCurrenciesNames is a function', function () {
        var newStorageService = new StorageService();
        expect(typeof newStorageService.saveCurrenciesNames).toEqual('function');
    });
    test("StorageService.saveCurrenciesNames calls 'saveCurrenciesNamesInStorage' function", function () {
        var newStorageService = new StorageService();
        var dataCurrenciesMock = {
            supportedCodes: [['USD', 'ARS']]
        };
        newStorageService.saveCurrenciesNames(dataCurrenciesMock);
        expect(saveCurrenciesNamesInStorage).toHaveBeenCalledTimes(1);
        expect(saveCurrenciesNamesInStorage).toHaveBeenCalledWith(dataCurrenciesMock);
    });
});
describe('StorageService.saveCurrencyRates', function () {
    test('StorageService.saveCurrencyRates is a function', function () {
        var newStorageService = new StorageService();
        expect(typeof newStorageService.saveCurrencyRates).toEqual('function');
    });
    test("StorageService.saveCurrencyRates calls 'saveCurrencyRatesInStorage' function", function () {
        var newStorageService = new StorageService();
        var currencyRatesDataMock = {
            baseCode: 'USD',
            conversionRates: {
                USD: 1,
                ARS: 2
            },
            lastUpdate: '2022-12-01'
        };
        newStorageService.saveCurrencyRates('USD', currencyRatesDataMock);
        expect(saveCurrencyRatesInStorage).toHaveBeenCalledTimes(1);
        expect(saveCurrencyRatesInStorage).toHaveBeenCalledWith('USD', currencyRatesDataMock);
    });
});
describe('StorageService.getCurrenciesNames', function () {
    test('StorageService.getCurrenciesNames is a function', function () {
        var newStorageService = new StorageService();
        expect(typeof newStorageService.getCurrenciesNames).toEqual('function');
    });
    test("StorageService.getCurrenciesNames  calls 'getCurrenciesNamesFromStorage' function", function () {
        var newStorageService = new StorageService();
        newStorageService.getCurrenciesNames();
        expect(getCurrenciesNamesFromStorage).toHaveBeenCalledTimes(1);
    });
});
describe('StorageService.getCurrencyRates', function () {
    test('StorageService.getCurrencyRates is a function', function () {
        var newStorageService = new StorageService();
        expect(typeof newStorageService.getCurrencyRates).toEqual('function');
    });
    test("StorageService.getCurrenciesNames  calls 'getCurrencyRatesFromStorage' function", function () {
        var newStorageService = new StorageService();
        newStorageService.getCurrencyRates('USD');
        expect(getCurrencyRatesFromStorage).toHaveBeenCalledTimes(1);
        expect(getCurrencyRatesFromStorage).toHaveBeenCalledWith('USD');
    });
});
//# sourceMappingURL=StorageService.test.js.map