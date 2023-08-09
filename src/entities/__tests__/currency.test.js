import Currency from '../Currency';
test('Currency should return an object from data', function () {
    var currencyMock = {
        base_code: 'USD',
        conversion_rates: {
            ARS: 1,
            USD: 142.1134
        },
        time_last_update_utc: '2022-12-01T00:00:00.000Z'
    };
    var newCurrency = new Currency(currencyMock);
    expect(newCurrency).toBeInstanceOf(Currency);
});
//# sourceMappingURL=currency.test.js.map