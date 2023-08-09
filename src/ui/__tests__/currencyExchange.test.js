import htmlFixture from '../__fixtures__/currencyExchange.fixture';
import currenciesFixture from '../../../fixtures/currencies.json';
import currencyFixture from '../../../fixtures/currency.json';
import handleExchange from '../currencyExchange';
var currencies = {
    supportedCodes: currenciesFixture.supported_codes
};
var currencyMock = {
    baseCode: currencyFixture.base_code,
    conversionRates: currencyFixture.conversion_rates,
    lastUpdate: currencyFixture.time_last_update_utc
};
beforeAll(function () {
    document.body.innerHTML = htmlFixture;
    var callBackExchangeFunction = jest.fn(function () { return currencyMock; });
    handleExchange(currencies, callBackExchangeFunction);
    var baseCurrency = document.querySelector('#base-currency');
    baseCurrency.value = 'USD';
    baseCurrency.dispatchEvent(new Event('input'));
});
describe('handleExchange', function () {
    test('Exchange table should be generated and consist of 163 rows', function () {
        expect(document.querySelectorAll('tr').length).toBe(163);
    });
    test('Date of currency rate last update should be present', function () {
        var baseCurrencyTitle = document.querySelector('#base-currency-title');
        var currentDate = document.querySelector('#current-date');
        expect(baseCurrencyTitle.textContent).toBe('USD');
        expect(currentDate.textContent).toBe('Thu, 15 Sep 2022');
    });
    test('Equivalence of currency should be shown', function () {
        var baseAmount = document.querySelector('#base-amount');
        baseAmount.value = '1';
        baseAmount.dispatchEvent(new Event('input'));
        var $results = document.querySelector('#target-amount');
        var $baseEquivalency = document.querySelector('#base-equivalency');
        var $targetEquivalency = document.querySelector('#target-equivalency');
        expect($results.value).toBe('142.1134');
        expect($baseEquivalency.textContent).toBe('1 USD');
        expect($targetEquivalency.textContent).toBe('142.1134 ARS');
    });
    test('Currency result should be correctly calculated 1 USD to ARS (142.1134)', function () {
        var baseAmount = document.querySelector('#base-amount');
        baseAmount.value = '1';
        baseAmount.dispatchEvent(new Event('input'));
        var $results = document.querySelector('#target-amount');
        expect($results.value).toBe('142.1134');
    });
    test('Exchange executes on valid Target currency, skips otherwise', function () {
        var baseAmount = document.querySelector('#base-amount');
        baseAmount.value = '1';
        var targetCurrency = document.querySelector('#target-currency');
        targetCurrency.value = 'ARS';
        baseAmount.dispatchEvent(new Event('input'));
        var targetAmount = document.querySelector('#target-amount');
        expect(targetAmount.value).toBe('142.1134');
        targetCurrency.value = '0';
        baseAmount.dispatchEvent(new Event('input'));
        expect(targetAmount.value).toBe('');
    });
});
//# sourceMappingURL=currencyExchange.test.js.map