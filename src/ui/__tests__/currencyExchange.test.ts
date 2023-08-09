/**
 * @jest-environment jsdom
 */

import htmlFixture from '../__fixtures__/currencyExchange.fixture';
import currenciesFixture from '../../../fixtures/currencies.json';
import currencyFixture from '../../../fixtures/currency.json';
import { IParsedCurrencies } from '../../types/currencies';
import handleExchange from '../currencyExchange';
import { IParsedCurrency } from '../../types/currency';

const currencies: IParsedCurrencies = {
  supportedCodes: currenciesFixture.supported_codes
};
const currencyMock: IParsedCurrency = {
  baseCode: currencyFixture.base_code,
  conversionRates: currencyFixture.conversion_rates,
  lastUpdate: currencyFixture.time_last_update_utc
};
beforeAll(() => {
  document.body.innerHTML = htmlFixture;
  const callBackExchangeFunction = jest.fn(() => currencyMock);
  handleExchange(currencies, callBackExchangeFunction as jest.Mock);
  const baseCurrency = document.querySelector(
    '#base-currency'
  ) as HTMLInputElement;
  baseCurrency.value = 'USD';
  baseCurrency.dispatchEvent(new Event('input'));
});

describe('handleExchange', () => {
  test('Exchange table should be generated and consist of 163 rows', () => {
    expect(document.querySelectorAll('tr').length).toBe(163);
  });

  test('Date of currency rate last update should be present', () => {
    const baseCurrencyTitle = document.querySelector(
      '#base-currency-title'
    ) as HTMLElement;
    const currentDate = document.querySelector('#current-date') as HTMLElement;
    expect(baseCurrencyTitle.textContent).toBe('USD');
    expect(currentDate.textContent).toBe('Thu, 15 Sep 2022');
  });
  test('Equivalence of currency should be shown', () => {
    const baseAmount = document.querySelector(
      '#base-amount'
    ) as HTMLInputElement;
    baseAmount.value = '1';
    baseAmount.dispatchEvent(new Event('input'));

    const $results = document.querySelector(
      '#target-amount'
    ) as HTMLInputElement;
    const $baseEquivalency = document.querySelector(
      '#base-equivalency'
    ) as HTMLInputElement;
    const $targetEquivalency = document.querySelector(
      '#target-equivalency'
    ) as HTMLInputElement;

    expect($results.value).toBe('142.1134');
    expect($baseEquivalency.textContent).toBe('1 USD');
    expect($targetEquivalency.textContent).toBe('142.1134 ARS');
  });

  test('Currency result should be correctly calculated 1 USD to ARS (142.1134)', () => {
    const baseAmount = document.querySelector(
      '#base-amount'
    ) as HTMLInputElement;
    baseAmount.value = '1';
    baseAmount.dispatchEvent(new Event('input'));

    const $results = document.querySelector(
      '#target-amount'
    ) as HTMLInputElement;
    expect($results.value).toBe('142.1134');
  });
  test('Exchange executes on valid Target currency, skips otherwise', () => {
    const baseAmount = document.querySelector(
      '#base-amount'
    ) as HTMLInputElement;
    baseAmount.value = '1';

    const targetCurrency = document.querySelector(
      '#target-currency'
    ) as HTMLInputElement;
    targetCurrency.value = 'ARS';
    baseAmount.dispatchEvent(new Event('input'));
    const targetAmount = document.querySelector(
      '#target-amount'
    ) as HTMLInputElement;
    expect(targetAmount.value).toBe('142.1134');

    targetCurrency.value = '0';
    baseAmount.dispatchEvent(new Event('input'));
    expect(targetAmount.value).toBe('');
  });
});
