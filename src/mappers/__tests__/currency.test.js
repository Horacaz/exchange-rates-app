import Currency from '../../entities/Currency';
import mapCurrency from '../currency';
import currencyFixtureData from '../../../fixtures/currency.json';
jest.mock('../../entities/Currency', function () { return jest.fn(); });
test('Map function should return a new currencies names from data', function () {
    var base_code = currencyFixtureData.base_code, conversion_rates = currencyFixtureData.conversion_rates, time_last_update_utc = currencyFixtureData.time_last_update_utc;
    mapCurrency(currencyFixtureData);
    expect(Currency).toHaveBeenCalledWith({
        base_code: base_code,
        conversion_rates: conversion_rates,
        time_last_update_utc: time_last_update_utc
    });
});
//# sourceMappingURL=currency.test.js.map