import { saveCurrenciesNamesInStorage, saveCurrencyRatesInStorage, getCurrenciesNamesFromStorage, getCurrencyRatesFromStorage } from '../storage/storage.js';
var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.saveCurrenciesNames = function (data) {
        return saveCurrenciesNamesInStorage(data);
    };
    StorageService.prototype.saveCurrencyRates = function (base, data) {
        return saveCurrencyRatesInStorage(base, data);
    };
    StorageService.prototype.getCurrenciesNames = function () {
        return getCurrenciesNamesFromStorage();
    };
    StorageService.prototype.getCurrencyRates = function (base) {
        return getCurrencyRatesFromStorage(base);
    };
    return StorageService;
}());
export default StorageService;
//# sourceMappingURL=StorageService.js.map