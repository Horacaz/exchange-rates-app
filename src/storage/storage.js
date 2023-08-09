export function getCurrencyRatesFromStorage(base) {
    var baseCurrency = JSON.parse(localStorage.getItem(base));
    if (baseCurrency === null) {
        throw new Error('The searched currency was not found.');
    }
    return baseCurrency;
}
export function getCurrenciesNamesFromStorage() {
    var currencies = JSON.parse(localStorage.getItem('currencies'));
    if (currencies === null) {
        throw new Error('The currencies were not found.');
    }
    return currencies;
}
export function saveCurrenciesNamesInStorage(data) {
    localStorage.setItem('currencies', JSON.stringify(data));
}
export function saveCurrencyRatesInStorage(base, data) {
    localStorage.setItem(base, JSON.stringify(data));
}
//# sourceMappingURL=storage.js.map