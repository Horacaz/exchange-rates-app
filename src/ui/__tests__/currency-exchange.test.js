/**
 * @jest-environment jsdom
 */

/// <reference types = '@types/jest' />
import htmlFixture from '../currency-exchange-fixture.js';
import currencyFixture from './currency.json';
import currenciesFixture from './currencies.json';

import {
  createBaseCurrencyOptions, createTargetCurrencyOptions, handleExchange,
} from '../currency-exchange.js';

import * as mapMock from '../../mappers/currency.js';

const $ = require('jquery');

/// esto está mal nombrado porque sólo las clases van en PascalCase,
/// / esos son 2 objetos
/// //(instancias de una clase)
const Currencies = {
  currenciesNames: currenciesFixture.supported_codes,
};

const Currency = {
  baseCode: currencyFixture.base_code,
  conversionRates: currencyFixture.conversion_rates,
  lastUpdate: currencyFixture.time_last_update_utc,
};

beforeEach(() => {
  const map = jest.spyOn(mapMock, 'default');
  map.mockImplementation(() => Currency);

  document.body.innerHTML = htmlFixture;
  const callBackMock = () => jest.fn();
  handleExchange(Currencies, callBackMock);
  $('#base-currency').trigger('oninput');
});

test('Exchange table should be generated and consist of 163 rows', () => {
  expect(document.querySelectorAll('tr').length).toBe(163);
});

test('Date of currency rate last update should be present', () => {
  expect(document.querySelector('#base-currency-title').textContent)
    .toBe('USD');
  expect(document.querySelector('#current-date').textContent)
    .toBe('Thu, 15 Sep 2022');
});

test('Equivalence of currency should be shown', () => {
  document.querySelector('#base-amount').value = '1';
  $('#base-amount').trigger('oninput');

  const $results = document.querySelector('#target-amount');
  const $baseEquivalency = document.querySelector('#base-equivalency');
  const $targetEquivalency = document.querySelector('#target-equivalency');

  expect($results.value).toBe('142.1134');
  expect($baseEquivalency.textContent).toBe('1 USD');
  expect($targetEquivalency.textContent).toBe('142.1134 ARS');
});

test('Currency result should be correctly calculated 1 USD to ARS (142.1134)', () => {
  document.querySelector('#base-amount').value = '1';
  $('#base-amount').trigger('oninput');

  const $results = document.querySelector('#target-amount');
  expect($results.value).toBe('142.1134');
});

test('Currency base options should be created', () => {
  createBaseCurrencyOptions(Currencies);
  expect(document.querySelectorAll('#base-currency option').length).toBe(163);
});

test('Currency target options should be created', () => {
  createTargetCurrencyOptions(Currencies);
  expect(document.querySelectorAll('#target-currency option').length).toBe(163);
});

test('Exchange should not be executed if no target currency is selected', () => {
  document.querySelector('#base-amount').value = '1';
  document.querySelector('#target-currency').value = '0';
  $('#base-amount').trigger('oninput');
  expect(document.querySelector('#target-amount').value).toBe('');
});
