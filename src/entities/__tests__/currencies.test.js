import Currencies from '../Currencies';
test('Currencies should return an object from data', function () {
    var currenciesNamesMock = {
        supported_codes: []
    };
    var newCurrencies = new Currencies(currenciesNamesMock);
    expect(newCurrencies).toBeInstanceOf(Currencies);
});
//# sourceMappingURL=currencies.test.js.map